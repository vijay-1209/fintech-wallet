import prisma from "../config/prisma.js";

export const findUserById = async (
  userId
) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const findUserByEmail = async (
  email
) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const createOtp = async ({
  userId,
  codeHash,
  purpose,
  expiresAt,
}) => {
  return prisma.otpCode.create({
    data: {
      userId,
      codeHash,
      purpose,
      expiresAt,
    },
  });
};

export const findLatestOtp = async ({
  userId,
  purpose,
}) => {
  return prisma.otpCode.findFirst({
    where: {
      userId,

      purpose,

      verifiedAt: null,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

export const updateOtp = async (
  otpId,
  data
) => {
  return prisma.otpCode.update({
    where: {
      id: otpId,
    },

    data,
  });
};

export const enableTwoFactor = async (
  userId,
  secret
) => {
  return prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      twoFactorEnabled: true,

      twoFactorSecret: secret,

      twoFactorEnabledAt:
        new Date(),
    },
  });
};

export const disableTwoFactor = async (
  userId
) => {
  return prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      twoFactorEnabled: false,

      twoFactorSecret: null,

      twoFactorEnabledAt: null,
    },
  });
};