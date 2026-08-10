import crypto from "crypto";

import prisma from "../config/prisma.js";

import AppError from "../utils/AppError.js";

import {
  findUserWithWalletByEmail,
  findUserWithWalletById,
  createPaymentRequest,
  findPaymentRequestById,
  findUserPaymentRequests,
} from "../repositories/paymentRequest.repository.js";

const generatePaymentReference = () => {
  return `REQ-PAY-${Date.now()}-${crypto
    .randomBytes(8)
    .toString("hex")
    .toUpperCase()}`;
};

export const createRequest = async ({
  requesterId,
  receiverEmail,
  amount,
  note = null,
}) => {
  if (Number(amount) <= 0) {
    throw new AppError(
      "Request amount must be greater than zero",
      400
    );
  }

  const receiver =
    await findUserWithWalletByEmail(
      receiverEmail
    );

  if (!receiver) {
    throw new AppError(
      "User with this email was not found",
      404
    );
  }

  if (receiver.id === requesterId) {
    throw new AppError(
      "You cannot request money from yourself",
      400
    );
  }

  if (!receiver.wallet) {
    throw new AppError(
      "Receiver wallet not found",
      404
    );
  }

  if (receiver.wallet.status !== "ACTIVE") {
    throw new AppError(
      "Receiver wallet is not active",
      403
    );
  }

  const requester =
    await findUserWithWalletById(
      requesterId
    );

  if (!requester) {
    throw new AppError(
      "Requester account not found",
      404
    );
  }

  if (!requester.wallet) {
    throw new AppError(
      "Requester wallet not found",
      404
    );
  }

  const request =
    await createPaymentRequest({
      amount,

      note,

      requesterId,

      receiverId: receiver.id,

      expiresAt: new Date(
        Date.now() +
          7 * 24 * 60 * 60 * 1000
      ),
    });

  return request;
};

export const getRequestById = async ({
  userId,
  requestId,
}) => {
  const request =
    await findPaymentRequestById(
      requestId
    );

  if (!request) {
    throw new AppError(
      "Payment request not found",
      404
    );
  }

  const isParticipant =
    request.requesterId === userId ||
    request.receiverId === userId;

  if (!isParticipant) {
    throw new AppError(
      "You are not authorized to view this request",
      403
    );
  }

  return request;
};

export const getRequests = async ({
  userId,
  page = 1,
  limit = 20,
}) => {
  const result =
    await findUserPaymentRequests({
      userId,
      page,
      limit,
    });

  return {
    requests: result.requests,

    total: result.total,

    page,

    limit,

    totalPages: Math.ceil(
      result.total / limit
    ),
  };
};

export const acceptRequest = async ({
  userId,
  requestId,
}) => {
  const result = await prisma.$transaction(
    async (tx) => {
      const request =
        await tx.paymentRequest.findUnique({
          where: {
            id: requestId,
          },
        });

      if (!request) {
        throw new AppError(
          "Payment request not found",
          404
        );
      }

      if (request.receiverId !== userId) {
        throw new AppError(
          "Only the requested user can accept this request",
          403
        );
      }

      if (request.status !== "PENDING") {
        throw new AppError(
          `Payment request is already ${request.status.toLowerCase()}`,
          400
        );
      }

      if (
        request.expiresAt &&
        request.expiresAt < new Date()
      ) {
        await tx.paymentRequest.update({
          where: {
            id: request.id,
          },

          data: {
            status: "CANCELLED",
          },
        });

        throw new AppError(
          "Payment request has expired",
          400
        );
      }

      const payerWallet =
        await tx.wallet.findUnique({
          where: {
            userId: request.receiverId,
          },
        });

      if (!payerWallet) {
        throw new AppError(
          "Payer wallet not found",
          404
        );
      }

      if (
        payerWallet.status !== "ACTIVE"
      ) {
        throw new AppError(
          "Payer wallet is not active",
          403
        );
      }

      const requesterWallet =
        await tx.wallet.findUnique({
          where: {
            userId: request.requesterId,
          },
        });

      if (!requesterWallet) {
        throw new AppError(
          "Requester wallet not found",
          404
        );
      }

      if (
        requesterWallet.status !== "ACTIVE"
      ) {
        throw new AppError(
          "Requester wallet is not active",
          403
        );
      }

      /*
       * Debit payer atomically.
       */
      const payerUpdate =
        await tx.wallet.updateMany({
          where: {
            id: payerWallet.id,

            status: "ACTIVE",

            balance: {
              gte: request.amount,
            },
          },

          data: {
            balance: {
              decrement: request.amount,
            },
          },
        });

      if (payerUpdate.count !== 1) {
        throw new AppError(
          "Insufficient wallet balance",
          400
        );
      }

      /*
       * Credit requester.
       */
      await tx.wallet.update({
        where: {
          id: requesterWallet.id,
        },

        data: {
          balance: {
            increment: request.amount,
          },
        },
      });

      /*
       * Create transaction.
       */
      const transaction =
        await tx.transaction.create({
          data: {
            amount: request.amount,

            fee: 0,

            type: "TRANSFER",

            status: "SUCCESS",

            reference:
              generatePaymentReference(),

            note:
              request.note ||
              "Payment request",

            senderWalletId:
              payerWallet.id,

            receiverWalletId:
              requesterWallet.id,
          },

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
        });

      /*
       * Change request status only after
       * debit and credit succeed.
       */
      const updatedRequest =
        await tx.paymentRequest.update({
          where: {
            id: request.id,
          },

          data: {
            status: "ACCEPTED",
          },

          include: {
            requester: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },

            receiver: {
              select: {
                id: true,
                fullName: true,
                email: true,
              },
            },
          },
        });

      return {
        request: updatedRequest,
        transaction,
      };
    }
  );

  return result;
};

export const rejectRequest = async ({
  userId,
  requestId,
}) => {
  const request =
    await findPaymentRequestById(
      requestId
    );

  if (!request) {
    throw new AppError(
      "Payment request not found",
      404
    );
  }

  if (request.receiverId !== userId) {
    throw new AppError(
      "Only the requested user can reject this request",
      403
    );
  }

  if (request.status !== "PENDING") {
    throw new AppError(
      `Payment request is already ${request.status.toLowerCase()}`,
      400
    );
  }

  return prisma.paymentRequest.update({
    where: {
      id: requestId,
    },

    data: {
      status: "REJECTED",
    },

    include: {
      requester: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },

      receiver: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
  });
};

export const cancelRequest = async ({
  userId,
  requestId,
}) => {
  const request =
    await findPaymentRequestById(
      requestId
    );

  if (!request) {
    throw new AppError(
      "Payment request not found",
      404
    );
  }

  if (request.requesterId !== userId) {
    throw new AppError(
      "Only the requester can cancel this request",
      403
    );
  }

  if (request.status !== "PENDING") {
    throw new AppError(
      `Payment request is already ${request.status.toLowerCase()}`,
      400
    );
  }

  return prisma.paymentRequest.update({
    where: {
      id: requestId,
    },

    data: {
      status: "CANCELLED",
    },

    include: {
      requester: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },

      receiver: {
        select: {
          id: true,
          fullName: true,
          email: true,
        },
      },
    },
  });
};