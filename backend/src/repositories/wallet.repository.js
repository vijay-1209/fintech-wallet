import prisma from "../config/prisma.js";

export const findWalletByUserId = async (userId) => {
  return prisma.wallet.findUnique({
    where: {
      userId,
    },
  });
};

export const findWalletById = async (walletId) => {
  return prisma.wallet.findUnique({
    where: {
      id: walletId,
    },
  });
};

export const updateWalletBalance = async (
  walletId,
  balance,
  tx = prisma
) => {
  return tx.wallet.update({
    where: {
      id: walletId,
    },
    data: {
      balance,
    },
  });
};

export const updateWalletStatus = async (
  walletId,
  status
) => {
  return prisma.wallet.update({
    where: {
      id: walletId,
    },
    data: {
      status,
    },
  });
};

export const createTransaction = async (
  data,
  tx = prisma
) => {
  return tx.transaction.create({
    data,
  });
};

export const findTransactionsByWalletId = async (
  walletId,
  page = 1,
  limit = 20
) => {
  const skip = (page - 1) * limit;

  const where = {
    OR: [
      {
        senderWalletId: walletId,
      },
      {
        receiverWalletId: walletId,
      },
    ],
  };

  const [transactions, total] = await Promise.all([
    prisma.transaction.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      skip,
      take: limit,
    }),

    prisma.transaction.count({
      where,
    }),
  ]);

  return {
    transactions,
    total,
  };
};