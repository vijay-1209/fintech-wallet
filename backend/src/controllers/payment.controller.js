import asyncHandler from "../utils/asyncHandler.js";

import {
  sendMoney,
  getPaymentHistory,
} from "../services/payment.service.js";

export const transferMoney = asyncHandler(
  async (req, res) => {
    const {
      recipientEmail,
      amount,
      note,
    } = req.body;

    const idempotencyKey =
      req.headers["idempotency-key"];

    const result = await sendMoney({
      senderUserId: req.user.id,

      recipientEmail,

      amount,

      note,

      idempotencyKey,
    });

    return res.status(
      result.duplicate ? 200 : 201
    ).json({
      success: true,

      message: result.duplicate
        ? "Payment already processed"
        : "Payment completed successfully",

      data: {
        transaction:
          result.transaction,
      },
    });
  }
);

export const getHistory = asyncHandler(
  async (req, res) => {
    const page = Math.max(
      Number(req.query.page) || 1,
      1
    );

    const limit = Math.min(
      Math.max(
        Number(req.query.limit) || 20,
        1
      ),
      100
    );

    const result =
      await getPaymentHistory({
        userId: req.user.id,
        page,
        limit,
      });

    return res.status(200).json({
      success: true,
      data: result,
    });
  }
);