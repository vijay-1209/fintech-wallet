import prisma from "../config/prisma.js";

export const getAdminDashboardStats = async () => {
  const [
    totalUsers,
    totalWallets,
    totalTransactions,
    completedTransactions,
    pendingTransactions,
    failedTransactions,
    totalTopUps,
    successfulTopUps,
  ] = await Promise.all([
    prisma.user.count(),

    prisma.wallet.count(),

    prisma.transaction.count(),

    prisma.transaction.count({
      where: {
        status: "COMPLETED",
      },
    }),

    prisma.transaction.count({
      where: {
        status: "PENDING",
      },
    }),

    prisma.transaction.count({
      where: {
        status: "FAILED",
      },
    }),

    prisma.topUp.count(),

    prisma.topUp.count({
      where: {
        status: "SUCCESS",
      },
    }),
  ]);

  const walletBalance = await prisma.wallet.aggregate({
    _sum: {
      balance: true,
    },
  });

  const paymentVolume = await prisma.transaction.aggregate({
    _sum: {
      amount: true,
    },

    where: {
      status: "COMPLETED",
    },
  });

  const topUpVolume = await prisma.topUp.aggregate({
    _sum: {
      amount: true,
    },

    where: {
      status: "SUCCESS",
    },
  });

  return {
    users: totalUsers,

    wallets: totalWallets,

    transactions: {
      total: totalTransactions,

      completed: completedTransactions,

      pending: pendingTransactions,

      failed: failedTransactions,
    },

    topUps: {
      total: totalTopUps,

      successful: successfulTopUps,
    },

    walletBalance: walletBalance._sum.balance?.toString() || "0.00",

    paymentVolume: paymentVolume._sum.amount?.toString() || "0.00",

    topUpVolume: topUpVolume._sum.amount?.toString() || "0.00",
  };
};

export const getUsers = async ({ page = 1, limit = 20, search }) => {
  const skip = (page - 1) * limit;

  const where = {};

  if (search) {
    where.OR = [
      {
        email: {
          contains: search,

          mode: "insensitive",
        },
      },

      {
        name: {
          contains: search,

          mode: "insensitive",
        },
      },
    ];
  }

  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where,

      skip,

      take: limit,

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,

        name: true,

        email: true,

        role: true,

        createdAt: true,

        wallet: {
          select: {
            balance: true,

            currency: true,
          },
        },
      },
    }),

    prisma.user.count({
      where,
    }),
  ]);

  return {
    users,

    total,

    page,

    limit,

    totalPages: Math.ceil(total / limit),
  };
};

export const getUserDetails = async (userId) => {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },

    select: {
      id: true,

      name: true,

      email: true,

      role: true,

      createdAt: true,

      wallet: {
        select: {
          id: true,

          balance: true,

          currency: true,

          createdAt: true,
        },
      },

      _count: {
        select: {
          notifications: true,

          topUps: true,
        },
      },
    },
  });
};

export const getTransactions = async ({
  page = 1,
  limit = 20,
  status,
  type,
}) => {
  const skip = (page - 1) * limit;

  const where = {};

  if (status) {
    where.status = status;
  }

  if (type) {
    where.type = type;
  }

  const [transactions, total] = await Promise.all([
    prisma.transaction.findMany({
      where,

      skip,

      take: limit,

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,

        reference: true,

        type: true,

        status: true,

        amount: true,

        description: true,

        createdAt: true,

        senderWallet: {
          select: {
            user: {
              select: {
                id: true,

                email: true,

                name: true,
              },
            },
          },
        },

        receiverWallet: {
          select: {
            user: {
              select: {
                id: true,

                email: true,

                name: true,
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

    page,

    limit,

    totalPages: Math.ceil(total / limit),
  };
};

export const getTopUps = async ({ page = 1, limit = 20, status }) => {
  const skip = (page - 1) * limit;

  const where = {};

  if (status) {
    where.status = status;
  }

  const [topUps, total] = await Promise.all([
    prisma.topUp.findMany({
      where,

      skip,

      take: limit,

      orderBy: {
        createdAt: "desc",
      },

      select: {
        id: true,

        amount: true,

        currency: true,

        status: true,

        gateway: true,

        gatewayOrderId: true,

        gatewayPaymentId: true,

        failureReason: true,

        createdAt: true,

        user: {
          select: {
            id: true,

            email: true,

            name: true,
          },
        },
      },
    }),

    prisma.topUp.count({
      where,
    }),
  ]);

  return {
    topUps,

    total,

    page,

    limit,

    totalPages: Math.ceil(total / limit),
  };
};