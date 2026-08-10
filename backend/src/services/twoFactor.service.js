import AppError from "../utils/AppError.js";

import {
  generateOtp,
  hashOtp,
  generateOtpExpiry,
  generateTwoFactorSecret,
} from "../utils/otp.js";

import {
  findUserById,
  findUserByEmail,
  createOtp,
  findLatestOtp,
  updateOtp,
  enableTwoFactor,
  disableTwoFactor,
} from "../repositories/twoFactor.repository.js";

import {
  sendOtpEmail,
} from "./email.service.js";

export const generateLoginOtp =
  async (email) => {
    const user =
      await findUserByEmail(email);

    if (!user) {
      throw new AppError(
        "Invalid email or password",
        401
      );
    }

    if (!user.twoFactorEnabled) {
      throw new AppError(
        "Two-factor authentication is not enabled",
        400
      );
    }

    const otp = generateOtp();

    const codeHash = hashOtp(otp);

    const expiresAt =
      generateOtpExpiry(
        Number(
          process.env.OTP_EXPIRY_MINUTES ||
            5
        )
      );

    await createOtp({
      userId: user.id,

      codeHash,

      purpose: "LOGIN",

      expiresAt,
    });

    await sendOtpEmail({
      email: user.email,

      otp,

      purpose: "LOGIN",
    });

    return true;
  };

export const verifyLoginOtp =
  async ({
    userId,
    otp,
  }) => {
    const otpRecord =
      await findLatestOtp({
        userId,

        purpose: "LOGIN",
      });

    if (!otpRecord) {
      throw new AppError(
        "OTP not found or already used",
        400
      );
    }

    if (
      otpRecord.expiresAt <
      new Date()
    ) {
      throw new AppError(
        "OTP has expired",
        400
      );
    }

    const maxAttempts = Number(
      process.env.OTP_MAX_ATTEMPTS || 5
    );

    if (
      otpRecord.attempts >=
      maxAttempts
    ) {
      throw new AppError(
        "Maximum OTP attempts exceeded",
        429
      );
    }

    const codeHash =
      hashOtp(otp);

    if (
      codeHash !==
      otpRecord.codeHash
    ) {
      await updateOtp(
        otpRecord.id,
        {
          attempts: {
            increment: 1,
          },
        }
      );

      throw new AppError(
        "Invalid OTP",
        400
      );
    }

    await updateOtp(
      otpRecord.id,
      {
        verifiedAt: new Date(),
      }
    );

    return true;
  };

export const requestEnableTwoFactor =
  async (userId) => {
    const user =
      await findUserById(userId);

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    if (user.twoFactorEnabled) {
      throw new AppError(
        "Two-factor authentication is already enabled",
        400
      );
    }

    const otp = generateOtp();

    const codeHash =
      hashOtp(otp);

    const expiresAt =
      generateOtpExpiry(
        Number(
          process.env.OTP_EXPIRY_MINUTES ||
            5
        )
      );

    await createOtp({
      userId,

      codeHash,

      purpose: "ENABLE_2FA",

      expiresAt,
    });

    await sendOtpEmail({
      email: user.email,

      otp,

      purpose: "ENABLE_2FA",
    });

    return true;
  };

export const confirmEnableTwoFactor =
  async ({
    userId,
    otp,
  }) => {
    const user =
      await findUserById(userId);

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    if (user.twoFactorEnabled) {
      throw new AppError(
        "Two-factor authentication is already enabled",
        400
      );
    }

    const otpRecord =
      await findLatestOtp({
        userId,

        purpose: "ENABLE_2FA",
      });

    if (!otpRecord) {
      throw new AppError(
        "OTP not found or already used",
        400
      );
    }

    if (
      otpRecord.expiresAt <
      new Date()
    ) {
      throw new AppError(
        "OTP has expired",
        400
      );
    }

    const maxAttempts = Number(
      process.env.OTP_MAX_ATTEMPTS || 5
    );

    if (
      otpRecord.attempts >=
      maxAttempts
    ) {
      throw new AppError(
        "Maximum OTP attempts exceeded",
        429
      );
    }

    const codeHash =
      hashOtp(otp);

    if (
      codeHash !==
      otpRecord.codeHash
    ) {
      await updateOtp(
        otpRecord.id,
        {
          attempts: {
            increment: 1,
          },
        }
      );

      throw new AppError(
        "Invalid OTP",
        400
      );
    }

    await updateOtp(
      otpRecord.id,
      {
        verifiedAt: new Date(),
      }
    );

    const secret =
      generateTwoFactorSecret();

    await enableTwoFactor(
      userId,
      secret
    );

    return true;
  };

export const requestDisableTwoFactor =
  async (userId) => {
    const user =
      await findUserById(userId);

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    if (!user.twoFactorEnabled) {
      throw new AppError(
        "Two-factor authentication is not enabled",
        400
      );
    }

    const otp = generateOtp();

    const codeHash =
      hashOtp(otp);

    const expiresAt =
      generateOtpExpiry(
        Number(
          process.env.OTP_EXPIRY_MINUTES ||
            5
        )
      );

    await createOtp({
      userId,

      codeHash,

      purpose: "DISABLE_2FA",

      expiresAt,
    });

    await sendOtpEmail({
      email: user.email,

      otp,

      purpose: "DISABLE_2FA",
    });

    return true;
  };

export const confirmDisableTwoFactor =
  async ({
    userId,
    otp,
  }) => {
    const user =
      await findUserById(userId);

    if (!user) {
      throw new AppError(
        "User not found",
        404
      );
    }

    if (!user.twoFactorEnabled) {
      throw new AppError(
        "Two-factor authentication is not enabled",
        400
      );
    }

    const otpRecord =
      await findLatestOtp({
        userId,

        purpose: "DISABLE_2FA",
      });

    if (!otpRecord) {
      throw new AppError(
        "OTP not found or already used",
        400
      );
    }

    if (
      otpRecord.expiresAt <
      new Date()
    ) {
      throw new AppError(
        "OTP has expired",
        400
      );
    }

    const maxAttempts = Number(
      process.env.OTP_MAX_ATTEMPTS || 5
    );

    if (
      otpRecord.attempts >=
      maxAttempts
    ) {
      throw new AppError(
        "Maximum OTP attempts exceeded",
        429
      );
    }

    const codeHash =
      hashOtp(otp);

    if (
      codeHash !==
      otpRecord.codeHash
    ) {
      await updateOtp(
        otpRecord.id,
        {
          attempts: {
            increment: 1,
          },
        }
      );

      throw new AppError(
        "Invalid OTP",
        400
      );
    }

    await updateOtp(
      otpRecord.id,
      {
        verifiedAt: new Date(),
      }
    );

    await disableTwoFactor(
      userId
    );

    return true;
  };
