import AppError from "../utils/AppError.js";

import {
  getWalletSummary,
  getTransactionCounts,
  getTransactionAnalytics,
  getDailyAnalytics,
} from "../repositories/analytics.repository.js";

export const getDashboardAnalytics =
  async ({
    userId,
    startDate,
    endDate,
    days = 7,
  }) => {
    const wallet =
      await getWalletSummary(
        userId
      );

    if (!wallet) {
      throw new AppError(
        "Wallet not found",
        404
      );
    }

    const [
      counts,
      transactions,
      daily,
    ] = await Promise.all([
      getTransactionCounts(
        userId
      ),

      getTransactionAnalytics({
        userId,
        startDate,
        endDate,
      }),

      getDailyAnalytics({
        userId,
        days,
      }),
    ]);

    return {
      wallet: {
        balance:
          wallet.balance.toString(),

        currency:
          wallet.currency,
      },

      transactions: counts,

      volume: transactions,

      daily,
    };
  };