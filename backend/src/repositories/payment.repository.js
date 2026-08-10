import prisma from "../config/prisma.js";

export const findUserByEmail = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
    include: {
      wallet: true,
    },
  });
};

export const findTransactionByIdempotencyKey = async (
  idempotencyKey
) => {
  return prisma.transaction.findUnique({
    where: {
      idempotencyKey,
    },
    include: {
      senderWallet: true,
      receiverWallet: true,
    },
  });
};

export const findTransactionByReference = async (
  reference
) => {
  return prisma.transaction.findUnique({
    where: {
      reference,
    },
  });
};

export const findWalletTransactions = async (
  walletId,
  page,
  limit
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

  const [transactions, total] =
    await Promise.all([
      prisma.transaction.findMany({
        where,

        orderBy: {
          createdAt: "desc",
        },

        skip,
        take: limit,

        include: {
          senderWallet: {
            include: {
              user: {
                select: {
                  id: true,
                  fullName: true,
                  email: true,
                },
              },
            },
          },

          receiverWallet: {
            include: {
              user: {
                select: {
                  id: true,
                  fullName: true,
                  email: true,
                },
              },
            },
          },
        },
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