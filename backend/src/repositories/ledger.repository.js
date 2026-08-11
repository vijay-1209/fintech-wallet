export const createLedgerEntry = async (
  tx,
  {
    transactionId,
    walletId,
    type,
    amount,
    balanceBefore,
    balanceAfter,
  }
) => {
  return tx.ledgerEntry.create({
    data: {
      transactionId,

      walletId,

      type,

      amount,

      balanceBefore,

      balanceAfter,
    },
  });
};