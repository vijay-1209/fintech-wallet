import bcrypt from "bcrypt";
import crypto from "crypto";

import AppError from "../utils/AppError.js";
import prisma from "../config/prisma.js";
import { generateLoginOtp } from "./twoFactor.service.js";

import {
  findUserByEmail,
  findUserById,
  findUserByPhone,
  createRefreshToken,
  findRefreshToken,
  deleteRefreshToken,
} from "../repositories/auth.repository.js";

import {
  generateAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
} from "../utils/token.js";

const SALT_ROUNDS = 12;

export const registerUser = async ({ fullName, email, phone, password }) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new AppError("An account with this email already exists", 409);
  }

  if (phone) {
    const existingPhone = await findUserByPhone(phone);

    if (existingPhone) {
      throw new AppError(
        "An account with this phone number already exists",
        409,
      );
    }
  }

  const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      fullName,
      email,
      phone: phone || null,
      password: hashedPassword,

      wallet: {
        create: {
          balance: 0,
          currency: "INR",
        },
      },
    },

    include: {
      wallet: true,
    },
  });

  return {
    id: user.id,
    fullName: user.fullName,
    email: user.email,
    phone: user.phone,
    role: user.role,
    isVerified: user.isVerified,
  };
};

export const loginUser = async (email, password) => {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new AppError("Invalid email or password", 401);
  }

  const passwordMatches = await bcrypt.compare(password, user.password);

  if (!passwordMatches) {
    throw new AppError("Invalid email or password", 401);
  }

  if (user.twoFactorEnabled) {
    await generateLoginOtp(user.email);

    return {
      requiresTwoFactor: true,

      userId: user.id,
    };
  }
  const accessToken = generateAccessToken(user);
  const refreshToken = generateRefreshToken(user);

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const decoded = verifyRefreshToken(refreshToken);

  await createRefreshToken({
    token: refreshTokenHash,
    expiresAt: new Date(decoded.exp * 1000),
    userId: user.id,
  });

  return {
    user: {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      phone: user.phone,
      role: user.role,
      isVerified: user.isVerified,
      isTwoFAEnabled: user.isTwoFAEnabled,
    },
    accessToken,
    refreshToken,
  };
};

export const refreshAccessToken = async (refreshToken) => {
  if (!refreshToken) {
    throw new AppError("Refresh token is required", 401);
  }

  let decoded;

  try {
    decoded = verifyRefreshToken(refreshToken);
  } catch {
    throw new AppError("Invalid or expired refresh token", 401);
  }

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  const storedToken = await findRefreshToken(refreshTokenHash);

  if (!storedToken) {
    throw new AppError("Refresh token is invalid", 401);
  }

  await deleteRefreshToken(refreshTokenHash);

  const user = await findUserById(decoded.userId);

  if (!user) {
    throw new AppError("User no longer exists", 401);
  }

  const newAccessToken = generateAccessToken(user);

  const newRefreshToken = generateRefreshToken(user);

  const newHash = crypto
    .createHash("sha256")
    .update(newRefreshToken)
    .digest("hex");

  const newDecoded = verifyRefreshToken(newRefreshToken);

  await createRefreshToken({
    token: newHash,
    expiresAt: new Date(newDecoded.exp * 1000),
    userId: user.id,
  });

  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
  };
};

export const logoutUser = async (refreshToken) => {
  if (!refreshToken) {
    return;
  }

  const refreshTokenHash = crypto
    .createHash("sha256")
    .update(refreshToken)
    .digest("hex");

  await deleteRefreshToken(refreshTokenHash);
};
