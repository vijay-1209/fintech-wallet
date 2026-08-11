import asyncHandler from "../utils/asyncHandler.js";

import {
  createTopUpOrder,
} from "../services/topup.service.js";

import {
    verifyTopUp
} from "../services/topup.service.js";

export const createTopUp =
  asyncHandler(
    async (req, res) => {
      const {
        amount,
      } = req.body;

      const result =
        await createTopUpOrder({
          userId:
            req.user.id,

          amount,
        });

      return res.status(201).json({
        success: true,

        message:
          "Payment order created successfully",

        data: result,
      });
    }
  );

export const verifyTopUpPayment =
  asyncHandler(
    async (req, res) => {
      const {
        razorpayOrderId,
        razorpayPaymentId,
        razorpaySignature,
      } = req.body;

      const result =
        await verifyTopUp({
          userId:
            req.user.id,

          razorpayOrderId,

          razorpayPaymentId,

          razorpaySignature,
        });

      return res.status(200).json({
        success: true,

        message:
          "Payment verified successfully",

        data: result,
      });
    }
  );
