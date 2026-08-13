import prisma from "../config/prisma.js";

export const getWalletSummary =
  async (userId) => {
    const wallet =
      await prisma.wallet.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
          balance: true,
          currency: true,
        },
      });

    return wallet;
  };

export const getTransactionCounts =
  async (userId) => {
    const wallet =
      await prisma.wallet.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });

    if (!wallet) {
      return {
        total: 0,
        completed: 0,
        pending: 0,
        failed: 0,
      };
    }

    const [
      total,
      completed,
      pending,
      failed,
    ] = await Promise.all([
      prisma.transaction.count({
        where: {
          OR: [
            {
              senderWalletId:
                wallet.id,
            },
            {
              receiverWalletId:
                wallet.id,
            },
          ],
        },
      }),

      prisma.transaction.count({
        where: {
          status: "COMPLETED",

          OR: [
            {
              senderWalletId:
                wallet.id,
            },
            {
              receiverWalletId:
                wallet.id,
            },
          ],
        },
      }),

      prisma.transaction.count({
        where: {
          status: "PENDING",

          OR: [
            {
              senderWalletId:
                wallet.id,
            },
            {
              receiverWalletId:
                wallet.id,
            },
          ],
        },
      }),

      prisma.transaction.count({
        where: {
          status: "FAILED",

          OR: [
            {
              senderWalletId:
                wallet.id,
            },
            {
              receiverWalletId:
                wallet.id,
            },
          ],
        },
      }),
    ]);

    return {
      total,
      completed,
      pending,
      failed,
    };
  };

export const getTransactionAnalytics =
  async ({
    userId,
    startDate,
    endDate,
  }) => {
    const wallet =
      await prisma.wallet.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });

    if (!wallet) {
      return {
        sent: "0.00",
        received: "0.00",
        topups: "0.00",
      };
    }

    const dateFilter = {};

    if (startDate) {
      dateFilter.gte =
        new Date(startDate);
    }

    if (endDate) {
      dateFilter.lte =
        new Date(endDate);
    }

    const dateCondition =
      Object.keys(dateFilter).length
        ? {
            createdAt:
              dateFilter,
          }
        : {};

    const sent =
      await prisma.transaction.aggregate({
        _sum: {
          amount: true,
        },

        where: {
          senderWalletId:
            wallet.id,

          status:
            "COMPLETED",

          type:
            "PAYMENT",

          ...dateCondition,
        },
      });

    const received =
      await prisma.transaction.aggregate({
        _sum: {
          amount: true,
        },

        where: {
          receiverWalletId:
            wallet.id,

          status:
            "COMPLETED",

          type:
            "PAYMENT",

          ...dateCondition,
        },
      });

    const topups =
      await prisma.transaction.aggregate({
        _sum: {
          amount: true,
        },

        where: {
          receiverWalletId:
            wallet.id,

          status:
            "COMPLETED",

          type:
            "TOPUP",

          ...dateCondition,
        },
      });

    return {
      sent:
        sent._sum.amount
          ?.toString() || "0.00",

      received:
        received._sum.amount
          ?.toString() || "0.00",

      topups:
        topups._sum.amount
          ?.toString() || "0.00",
    };
  };

export const getDailyAnalytics =
  async ({
    userId,
    days = 7,
  }) => {
    const wallet =
      await prisma.wallet.findUnique({
        where: {
          userId,
        },
        select: {
          id: true,
        },
      });

    if (!wallet) {
      return [];
    }

    const startDate =
      new Date();

    startDate.setDate(
      startDate.getDate() -
        Number(days)
    );

    const transactions =
      await prisma.transaction.findMany({
        where: {
          status:
            "COMPLETED",

          createdAt: {
            gte: startDate,
          },

          OR: [
            {
              senderWalletId:
                wallet.id,
            },
            {
              receiverWalletId:
                wallet.id,
            },
          ],
        },

        select: {
          amount: true,

          type: true,

          senderWalletId:
            true,

          receiverWalletId:
            true,

          createdAt: true,
        },

        orderBy: {
          createdAt:
            "asc",
        },
      });

    const result = {};

    for (
      const transaction
      of transactions
    ) {
      const date =
        transaction.createdAt
          .toISOString()
          .split("T")[0];

      if (!result[date]) {
        result[date] = {
          date,

          sent: "0.00",

          received: "0.00",

          topups: "0.00",
        };
      }

      const amount =
        transaction.amount;

      if (
        transaction.type ===
          "PAYMENT" &&
        transaction.senderWalletId ===
          wallet.id
      ) {
        result[date].sent =
          (
            Number(
              result[date].sent
            ) +
            Number(amount)
          ).toFixed(2);
      }

      if (
        transaction.type ===
          "PAYMENT" &&
        transaction.receiverWalletId ===
          wallet.id
      ) {
        result[date].received =
          (
            Number(
              result[date].received
            ) +
            Number(amount)
          ).toFixed(2);
      }

      if (
        transaction.type ===
          "TOPUP" &&
        transaction.receiverWalletId ===
          wallet.id
      ) {
        result[date].topups =
          (
            Number(
              result[date].topups
            ) +
            Number(amount)
          ).toFixed(2);
      }
    }

    return Object.values(
      result
    );
  };  

export const getMonthlyAnalytics =
  async ({
    userId,
    months = 6,
  }) => {
    const wallet =
      await prisma.wallet.findUnique({
        where: {
          userId,
        },

        select: {
          id: true,
        },
      });

    if (!wallet) {
      return [];
    }

    const startDate =
      new Date();

    startDate.setMonth(
      startDate.getMonth() -
        Number(months)
    );

    const transactions =
      await prisma.transaction.findMany({
        where: {
          status:
            "COMPLETED",

          createdAt: {
            gte: startDate,
          },

          OR: [
            {
              senderWalletId:
                wallet.id,
            },
            {
              receiverWalletId:
                wallet.id,
            },
          ],
        },

        select: {
          amount: true,

          type: true,

          senderWalletId:
            true,

          receiverWalletId:
            true,

          createdAt: true,
        },

        orderBy: {
          createdAt:
            "asc",
        },
      });

    const result = {};

    for (
      const transaction
      of transactions
    ) {
      const month =
        transaction.createdAt
          .toISOString()
          .slice(0, 7);

      if (!result[month]) {
        result[month] = {
          month,

          sent: "0.00",

          received: "0.00",

          topups: "0.00",
        };
      }

      const amount =
        Number(
          transaction.amount
        );

      if (
        transaction.type ===
          "PAYMENT" &&
        transaction.senderWalletId ===
          wallet.id
      ) {
        result[month].sent =
          (
            Number(
              result[month].sent
            ) + amount
          ).toFixed(2);
      }

      if (
        transaction.type ===
          "PAYMENT" &&
        transaction.receiverWalletId ===
          wallet.id
      ) {
        result[month].received =
          (
            Number(
              result[month].received
            ) + amount
          ).toFixed(2);
      }

      if (
        transaction.type ===
          "TOPUP" &&
        transaction.receiverWalletId ===
          wallet.id
      ) {
        result[month].topups =
          (
            Number(
              result[month].topups
            ) + amount
          ).toFixed(2);
      }
    }

    return Object.values(
      result
    );
  };  