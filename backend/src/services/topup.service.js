import prisma from "../config/prisma.js";

import AppError from "../utils/AppError.js";

import { generateTransactionReference } from "../utils/transaction.js";

import { rupeesToPaise } from "../utils/currency.js";

import { createGatewayOrder } from "./gateway/razorpay.gateway.js";

import { createTopUp } from "../repositories/topup.repository.js";

import { verifyGatewayPayment } from "./gateway/razorpay.gateway.js";

import { createNotification } from "../repositories/notification.repository.js";

export const verifyTopUp = async ({
  userId,
  razorpayOrderId,
  razorpayPaymentId,
  razorpaySignature,
}) => {
  const isValid = verifyGatewayPayment({
    orderId: razorpayOrderId,

    paymentId: razorpayPaymentId,

    signature: razorpaySignature,
  });

  if (!isValid) {
    throw new AppError("Invalid payment signature", 400);
  }

  return prisma.$transaction(async (tx) => {
    const topUp = await tx.topUp.findUnique({
      where: {
        gatewayOrderId: razorpayOrderId,
      },
    });

    if (!topUp) {
      throw new AppError("Top-up not found", 404);
    }

    if (topUp.userId !== userId) {
      throw new AppError("Unauthorized payment", 403);
    }

    if (topUp.status === "SUCCESS") {
      return topUp;
    }

    const wallet = await tx.wallet.findUnique({
      where: {
        id: topUp.walletId,
      },
    });

    if (!wallet) {
      throw new AppError("Wallet not found", 404);
    }

    const balanceBefore = wallet.balance;

    const balanceAfter = balanceBefore.plus(topUp.amount);

    const transaction = await tx.transaction.create({
      data: {
        reference: generateTransactionReference(),

        type: "TOPUP",

        status: "COMPLETED",

        amount: topUp.amount,

        description: "Wallet top-up",

        receiverWalletId: wallet.id,
      },
    });

    await tx.wallet.update({
      where: {
        id: wallet.id,
      },

      data: {
        balance: balanceAfter,
      },
    });

    await tx.ledgerEntry.create({
      data: {
        transactionId: transaction.id,

        walletId: wallet.id,

        type: "CREDIT",

        amount: topUp.amount,

        balanceBefore,

        balanceAfter,
      },
    });

    await createNotification(tx, {
      userId,

      type: "TOPUP_SUCCESS",

      title: "Wallet Top-Up Successful",

      message: `₹${topUp.amount.toString()} has been added to your wallet.`,

      data: {
        topUpId: topUp.id,

        transactionId: transaction.id,

        gatewayOrderId: topUp.gatewayOrderId,

        amount: topUp.amount.toString(),
      },
    });
    
    return tx.topUp.update({
      where: {
        id: topUp.id,
      },

      data: {
        status: "SUCCESS",

        gatewayPaymentId: razorpayPaymentId,

        gatewaySignature: razorpaySignature,

        transactionId: transaction.id,
      },
    });
  });
};

export const createTopUpOrder = async ({ userId, amount }) => {
  const wallet = await prisma.wallet.findUnique({
    where: {
      userId,
    },
  });

  if (!wallet) {
    throw new AppError("Wallet not found", 404);
  }

  if (Number(amount) <= 0) {
    throw new AppError("Amount must be greater than zero", 400);
  }

  const receipt = generateTransactionReference();

  const gatewayOrder = await createGatewayOrder({
    amount: rupeesToPaise(amount),

    currency: "INR",

    receipt,
  });

  const topUp = await prisma.$transaction(async (tx) => {
    return createTopUp(tx, {
      userId,

      walletId: wallet.id,

      amount,

      currency: "INR",

      status: "CREATED",

      gateway: "RAZORPAY",

      gatewayOrderId: gatewayOrder.id,
    });
  });

  return {
    topUpId: topUp.id,

    orderId: gatewayOrder.id,

    amount: gatewayOrder.amount,

    currency: gatewayOrder.currency,

    keyId: process.env.RAZORPAY_KEY_ID,
  };
};
