import asyncHandler from "../utils/asyncHandler.js";

import {
  createRequest,
  getRequests,
  getRequestById,
  acceptRequest,
  rejectRequest,
  cancelRequest,
} from "../services/paymentRequest.service.js";

export const createPaymentRequest =
  asyncHandler(async (req, res) => {
    const {
      receiverEmail,
      amount,
      note,
    } = req.body;

    const request =
      await createRequest({
        requesterId: req.user.id,
        receiverEmail,
        amount,
        note,
      });

    return res.status(201).json({
      success: true,
      message:
        "Payment request created successfully",
      data: {
        request,
      },
    });
  });

export const getPaymentRequests =
  asyncHandler(async (req, res) => {
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
      await getRequests({
        userId: req.user.id,
        page,
        limit,
      });

    return res.status(200).json({
      success: true,
      data: result,
    });
  });

export const getPaymentRequest =
  asyncHandler(async (req, res) => {
    const request =
      await getRequestById({
        userId: req.user.id,
        requestId: req.params.requestId,
      });

    return res.status(200).json({
      success: true,
      data: {
        request,
      },
    });
  });

export const acceptPaymentRequest =
  asyncHandler(async (req, res) => {
    const result =
      await acceptRequest({
        userId: req.user.id,
        requestId: req.params.requestId,
      });

    return res.status(200).json({
      success: true,
      message:
        "Payment request accepted successfully",
      data: result,
    });
  });

export const rejectPaymentRequest =
  asyncHandler(async (req, res) => {
    const request =
      await rejectRequest({
        userId: req.user.id,
        requestId: req.params.requestId,
      });

    return res.status(200).json({
      success: true,
      message:
        "Payment request rejected successfully",
      data: {
        request,
      },
    });
  });

export const cancelPaymentRequest =
  asyncHandler(async (req, res) => {
    const request =
      await cancelRequest({
        userId: req.user.id,
        requestId: req.params.requestId,
      });

    return res.status(200).json({
      success: true,
      message:
        "Payment request cancelled successfully",
      data: {
        request,
      },
    });
  });