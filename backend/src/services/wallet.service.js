import crypto from "crypto";

import prisma from "../config/prisma.js";

import AppError from "../utils/AppError.js";

import {
  findWalletByUserId,
  updateWalletBalance,
  findTransactionsByWalletId,
} from "../repositories/wallet.repository.js";

export const depositMoney = async (
  userId,
  amount,
  note = null
) => {
  if (amount <= 0) {
    throw new AppError(
      "Deposit amount must be greater than zero",
      400
    );
  }

  const result = await prisma.$transaction(
    async (tx) => {
      const wallet = await tx.wallet.findUnique({
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

      if (wallet.status !== "ACTIVE") {
        throw new AppError(
          "Wallet is not active",
          403
        );
      }

      const newBalance =
        wallet.balance.add(amount);

      const updatedWallet =
        await tx.wallet.update({
          where: {
            id: wallet.id,
          },
          data: {
            balance: newBalance,
          },
        });

      const transaction =
        await tx.transaction.create({
          data: {
            amount,
            fee: 0,
            type: "CREDIT",
            status: "SUCCESS",

            reference: generateReference(),

            note,

            receiverWalletId: wallet.id,
            senderWalletId: null,
          },
        });

      return {
        wallet: updatedWallet,
        transaction,
      };
    }
  );

  return result;
};

export const getWallet = async (userId) => {
  const wallet = await findWalletByUserId(userId);

  if (!wallet) {
    throw new AppError(
      "Wallet not found",
      404
    );
  }

  return wallet;
};

const generateReference = () => {
  return `TXN-${Date.now()}-${crypto
    .randomBytes(6)
    .toString("hex")
    .toUpperCase()}`;
};

export const withdrawMoney = async (
  userId,
  amount,
  note = null
) => {
  if (amount <= 0) {
    throw new AppError(
      "Withdrawal amount must be greater than zero",
      400
    );
  }

  const result = await prisma.$transaction(
    async (tx) => {
      const wallet = await tx.wallet.findUnique({
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

      if (wallet.status !== "ACTIVE") {
        throw new AppError(
          "Wallet is not active",
          403
        );
      }

      if (wallet.balance.lt(amount)) {
        throw new AppError(
          "Insufficient wallet balance",
          400
        );
      }

      const newBalance =
        wallet.balance.sub(amount);

      const updatedWallet =
        await tx.wallet.update({
          where: {
            id: wallet.id,
          },
          data: {
            balance: newBalance,
          },
        });

      const transaction =
        await tx.transaction.create({
          data: {
            amount,
            fee: 0,

            type: "DEBIT",

            status: "SUCCESS",

            reference: generateReference(),

            note,

            senderWalletId: wallet.id,
            receiverWalletId: null,
          },
        });

      return {
        wallet: updatedWallet,
        transaction,
      };
    }
  );

  return result;
};

export const freezeWallet = async (userId) => {
  const wallet = await findWalletByUserId(userId);

  if (!wallet) {
    throw new AppError(
      "Wallet not found",
      404
    );
  }

  if (wallet.status === "FROZEN") {
    throw new AppError(
      "Wallet is already frozen",
      400
    );
  }

  if (wallet.status === "CLOSED") {
    throw new AppError(
      "Closed wallet cannot be frozen",
      400
    );
  }

  return updateWalletStatus(
    wallet.id,
    "FROZEN"
  );
};

export const unfreezeWallet = async (userId) => {
  const wallet = await findWalletByUserId(userId);

  if (!wallet) {
    throw new AppError(
      "Wallet not found",
      404
    );
  }

  if (wallet.status !== "FROZEN") {
    throw new AppError(
      "Wallet is not frozen",
      400
    );
  }

  return updateWalletStatus(
    wallet.id,
    "ACTIVE"
  );
};

export const getWalletTransactions = async (
  userId,
  page = 1,
  limit = 20
) => {
  const wallet = await findWalletByUserId(userId);

  if (!wallet) {
    throw new AppError(
      "Wallet not found",
      404
    );
  }

  const result =
    await findTransactionsByWalletId(
      wallet.id,
      page,
      limit
    );

  return {
    ...result,

    page,
    limit,

    totalPages: Math.ceil(
      result.total / limit
    ),
  };
};