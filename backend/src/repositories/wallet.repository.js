import prisma from "../config/prisma.js";

/**
 * Find wallet by user ID
 */
export const findWalletByUserId = async (userId) => {
  return await prisma.wallet.findUnique({
    where: {
      userId,
    },
  });
};

/**
 * Find wallet by ID
 */
export const findWalletById = async (walletId) => {
  return await prisma.wallet.findUnique({
    where: {
      id: walletId,
    },
  });
};

/**
 * Create wallet
 */
export const createWallet = async (userId) => {
  return await prisma.wallet.create({
    data: {
      userId,
      balance: 0,
    },
  });
};

/**
 * Update wallet balance
 */
export const updateWalletBalance = async (walletId, balance) => {
  return await prisma.wallet.update({
    where: {
      id: walletId,
    },

    data: {
      balance,
    },
  });
};

/**
 * Find transactions belonging to wallet
 */
export const findTransactionsByWalletId = async (
  walletId,
  { page = 1, limit = 10 } = {},
) => {
  const skip = (page - 1) * limit;

  const [transactions, total] = await Promise.all([
    prisma.transaction.findMany({
      where: {
        walletId,
      },

      orderBy: {
        createdAt: "desc",
      },

      skip,

      take: limit,
    }),

    prisma.transaction.count({
      where: {
        walletId,
      },
    }),
  ]);

  return {
    transactions,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
  };
};

/**
 * Create wallet transaction
 */
export const createTransaction = async ({
  walletId,
  type,
  amount,
  status,
  reference,
  description,
}) => {
  return await prisma.transaction.create({
    data: {
      walletId,
      type,
      amount,
      status,
      reference,
      description,
    },
  });
};