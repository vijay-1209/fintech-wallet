import bcrypt from "bcrypt";
import crypto from "crypto";

import AppError from "../utils/AppError.js";

import {
  findUserByEmail,
  findUserById,
  findUserByPhone,
  createUser,
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

export const registerUser = async ({
  fullName,
  email,
  phone,
  password,
}) => {
  const existingUser = await findUserByEmail(email);

  if (existingUser) {
    throw new AppError(
      "An account with this email already exists",
      409
    );
  }

  if (phone) {
    const existingPhone = await findUserByPhone(phone);

    if (existingPhone) {
      throw new AppError(
        "An account with this phone number already exists",
        409
      );
    }
  }

  const hashedPassword = await bcrypt.hash(
    password,
    SALT_ROUNDS
  );

  const user = await createUser({
    fullName,
    email,
    phone: phone || null,
    password: hashedPassword,
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
    throw new AppError(
      "Invalid email or password",
      401
    );
  }

  const passwordMatches = await bcrypt.compare(
    password,
    user.password
  );

  if (!passwordMatches) {
    throw new AppError(
      "Invalid email or password",
      401
    );
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