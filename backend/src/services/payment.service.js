import prisma from "../config/prisma.js";

import AppError from "../utils/AppError.js";

import {
  generateTransactionReference,
} from "../utils/transaction.js";

import {
  lockWallet,
} from "../repositories/walletLock.repository.js";

import {
  createLedgerEntry,
} from "../repositories/ledger.repository.js";

import {
  findIdempotencyKey,
  createIdempotencyKey,
  completeIdempotencyKey,
  failIdempotencyKey,
} from "../repositories/idempotency.repository.js";

export const createPayment =
  async ({
    userId,
    receiverUserId,
    amount,
    description,
    idempotencyKey,
  }) => {
    return prisma.$transaction(
      async (tx) => {
        
          // Check idempotency
         

        const existingKey =
          await findIdempotencyKey(
            tx,
            idempotencyKey
          );

        if (existingKey) {
          if (
            existingKey.status ===
            "COMPLETED"
          ) {
            return existingKey.response;
          }

          if (
            existingKey.status ===
            "PROCESSING"
          ) {
            throw new AppError(
              "Payment is already being processed",
              409
            );
          }
        }

         
          //  Get sender wallet
         

        const senderWallet =
          await tx.wallet.findUnique({
            where: {
              userId,
            },
          });

        if (!senderWallet) {
          throw new AppError(
            "Sender wallet not found",
            404
          );
        }

        
          // Get receiver wallet
         

        const receiverWallet =
          await tx.wallet.findUnique({
            where: {
              userId:
                receiverUserId,
            },
          });

        if (!receiverWallet) {
          throw new AppError(
            "Receiver wallet not found",
            404
          );
        }

        
          //  Prevent self payment
         

        if (
          senderWallet.id ===
          receiverWallet.id
        ) {
          throw new AppError(
            "You cannot send money to yourself",
            400
          );
        }

  
        //  Create idempotency record
    

        await createIdempotencyKey(
          tx,
          {
            key: idempotencyKey,

            userId,
          }
        );

  
        //  Lock wallets
    

        const lockedSender =
          await lockWallet(
            tx,
            senderWallet.id
          );

        const lockedReceiver =
          await lockWallet(
            tx,
            receiverWallet.id
          );

        if (
          !lockedSender ||
          !lockedReceiver
        ) {
          throw new AppError(
            "Unable to lock wallets",
            500
          );
        }

  
        //  Validate balance
    

        if (
          lockedSender.balance
            .lessThan(amount)
        ) {
          throw new AppError(
            "Insufficient wallet balance",
            400
          );
        }

  
        //  Calculate balances
    

        const senderBalanceBefore =
          lockedSender.balance;

        const receiverBalanceBefore =
          lockedReceiver.balance;

        const senderBalanceAfter =
          senderBalanceBefore.minus(
            amount
          );

        const receiverBalanceAfter =
          receiverBalanceBefore.plus(
            amount
          );

  
        //  Create transaction
    

        const transaction =
          await tx.transaction.create({
            data: {
              reference:
                generateTransactionReference(),

              type: "PAYMENT",

              status:
                "PENDING",

              amount,

              description,

              senderWalletId:
                lockedSender.id,

              receiverWalletId:
                lockedReceiver.id,
            },
          });

  
        //  Debit sender
    

        await tx.wallet.update({
          where: {
            id: lockedSender.id,
          },

          data: {
            balance:
              senderBalanceAfter,
          },
        });

  
          // Credit receiver
    

        await tx.wallet.update({
          where: {
            id: lockedReceiver.id,
          },

          data: {
            balance:
              receiverBalanceAfter,
          },
        });

  
          // Sender ledger
    

        await createLedgerEntry(
          tx,
          {
            transaction:
              transaction.id,

            walletId:
              lockedSender.id,

            type: "DEBIT",

            amount,

            balanceBefore:
              senderBalanceBefore,

            balanceAfter:
              senderBalanceAfter,
          }
        );

  
          // Receiver ledger
    

        await createLedgerEntry(
          tx,
          {
            transactionId:
              transaction.id,

            walletId:
              lockedReceiver.id,

            type: "CREDIT",

            amount,

            balanceBefore:
              receiverBalanceBefore,

            balanceAfter:
              receiverBalanceAfter,
          }
        );

  
        //  Complete transaction
    

        const completedTransaction =
          await tx.transaction.update({
            where: {
              id: transaction.id,
            },

            data: {
              status:
                "COMPLETED",
            },

            include: {
              ledgerEntries: true,
            },
          });

  
          // Response
    

        const response = {
          transaction:
            completedTransaction,

          amount,

          status: "COMPLETED",
        };

  
          // Complete idempotency
    

        await completeIdempotencyKey(
          tx,
          {
            key: idempotencyKey,

            transactionId:
              transaction.id,

            response,
          }
        );

        return response;
      }
    );
  };