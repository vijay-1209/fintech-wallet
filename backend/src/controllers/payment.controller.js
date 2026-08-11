import asyncHandler from "../utils/asyncHandler.js";

import {
  createPayment,
} from "../services/payment.service.js";

export const sendPayment =
  asyncHandler(async (req, res) => {
    const {
      receiverUserId,
      amount,
      description,
    } = req.body;

    const idempotencyKey =
      req.headers[
        "idempotency-key"
      ];

    if (!idempotencyKey) {
      return res.status(400).json({
        success: false,

        message:
          "Idempotency-Key header is required",
      });
    }

    const result =
      await createPayment({
        userId: req.user.id,

        receiverUserId,

        amount,

        description,

        idempotencyKey,
      });

    return res.status(200).json({
      success: true,

      message:
        "Payment completed successfully",

      data: result,
    });
  });