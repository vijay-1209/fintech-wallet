import crypto from "crypto";

import prisma from "../config/prisma.js";

import AppError from "../utils/AppError.js";

import {
  findUserByEmail,
  findTransactionByIdempotencyKey,
  findWalletTransactions,
} from "../repositories/payment.repository.js";

const generatePaymentReference = () => {
  return `PAY-${Date.now()}-${crypto
    .randomBytes(8)
    .toString("hex")
    .toUpperCase()}`;
};

export const sendMoney = async ({
  senderUserId,
  recipientEmail,
  amount,
  note = null,
  idempotencyKey,
}) => {
  if (!idempotencyKey) {
    throw new AppError(
      "Idempotency key is required",
      400
    );
  }

  if (Number(amount) <= 0) {
    throw new AppError(
      "Payment amount must be greater than zero",
      400
    );
  }

  const existingTransaction =
    await findTransactionByIdempotencyKey(
      idempotencyKey
    );

  if (existingTransaction) {
    return {
      duplicate: true,
      transaction: existingTransaction,
    };
  }

  const recipient =
    await findUserByEmail(
      recipientEmail
    );

  if (!recipient) {
    throw new AppError(
      "Recipient account not found",
      404
    );
  }

  if (recipient.id === senderUserId) {
    throw new AppError(
      "You cannot send money to yourself",
      400
    );
  }

  if (!recipient.wallet) {
    throw new AppError(
      "Recipient wallet not found",
      404
    );
  }

  const result = await prisma.$transaction(
    async (tx) => {
      const senderWallet =
        await tx.wallet.findUnique({
          where: {
            userId: senderUserId,
          },
        });

      if (!senderWallet) {
        throw new AppError(
          "Sender wallet not found",
          404
        );
      }

      if (
        senderWallet.status !== "ACTIVE"
      ) {
        throw new AppError(
          "Sender wallet is not active",
          403
        );
      }

      const receiverWallet =
        await tx.wallet.findUnique({
          where: {
            id: recipient.wallet.id,
          },
        });

      if (!receiverWallet) {
        throw new AppError(
          "Recipient wallet not found",
          404
        );
      }

      if (
        receiverWallet.status !== "ACTIVE"
      ) {
        throw new AppError(
          "Recipient wallet is not active",
          403
        );
      }

      /*
       * Atomically deduct money from the sender.
       *
       * The balance condition is checked inside the
       * database query, which protects against
       * concurrent spending.
       */
      const senderUpdate =
        await tx.wallet.updateMany({
          where: {
            id: senderWallet.id,

            status: "ACTIVE",

            balance: {
              gte: amount,
            },
          },

          data: {
            balance: {
              decrement: amount,
            },
          },
        });

      if (senderUpdate.count !== 1) {
        throw new AppError(
          "Insufficient wallet balance",
          400
        );
      }

      /*
       * Credit recipient.
       */
      await tx.wallet.update({
        where: {
          id: receiverWallet.id,
        },

        data: {
          balance: {
            increment: amount,
          },
        },
      });

      /*
       * Create transaction record.
       */
      const transaction =
        await tx.transaction.create({
          data: {
            amount,
            fee: 0,

            type: "TRANSFER",

            status: "SUCCESS",

            reference:
              generatePaymentReference(),

            idempotencyKey,

            note,

            senderWalletId:
              senderWallet.id,

            receiverWalletId:
              receiverWallet.id,
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

      return transaction;
    }
  );

  return {
    duplicate: false,
    transaction: result,
  };
};

export const getPaymentHistory = async ({
  userId,
  page = 1,
  limit = 20,
}) => {
  const wallet = await prisma.wallet.findUnique({
    where: {
      userId,
    },
  });

  if (!wallet) {
    throw new AppError(
      "Wallet not found",
      404
    );
  }

  const result =
    await findWalletTransactions(
      wallet.id,
      page,
      limit
    );

  return {
    transactions: result.transactions,
    total: result.total,
    page,
    limit,
    totalPages: Math.ceil(
      result.total / limit
    ),
  };
};