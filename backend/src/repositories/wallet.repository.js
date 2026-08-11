import prisma from "../config/prisma.js";

export const findWalletByUserId =
  async (userId) => {
    return prisma.wallet.findUnique({
      where: {
        userId,
      },
    });
  };

export const findWalletById =
  async (walletId) => {
    return prisma.wallet.findUnique({
      where: {
        id: walletId,
      },
    });
  };