import asyncHandler from "../utils/asyncHandler.js";

import {
  getDashboardAnalytics,
} from "../services/analytics.service.js";

export const getDashboard =
  asyncHandler(
    async (req, res) => {
      const {
        startDate,
        endDate,
        days,
      } = req.query;

      const result =
        await getDashboardAnalytics({
          userId:
            req.user.id,

          startDate,

          endDate,

          days:
            days
              ? Number(days)
              : 7,
        });

      return res.status(200).json({
        success: true,

        data: result,
      });
    }
  );