import prisma from "../config/prisma.js";

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};

export const findUserByPhone = async (phone) => {
  return prisma.user.findUnique({
    where: {
      phone,
    },
  });
};

export const findUserById = async (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const createUser = async (data) => {
  return prisma.user.create({
    data,
  });
};

export const createRefreshToken = async (data) => {
  return prisma.refreshToken.create({
    data,
  });
};

export const findRefreshToken = async (token) => {
  return prisma.refreshToken.findUnique({
    where: {
      token,
    },
    include: {
      user: true,
    },
  });
};

export const deleteRefreshToken = async (token) => {
  return prisma.refreshToken.deleteMany({
    where: {
      token,
    },
  });
};

export const deleteUserRefreshTokens = async (userId) => {
  return prisma.refreshToken.deleteMany({
    where: {
      userId,
    },
  });
};