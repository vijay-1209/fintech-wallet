export const lockWallet = async (
  tx,
  walletId
) => {
  const result =
    await tx.$queryRaw`
      SELECT
        id,
        "userId",
        balance,
        currency
      FROM "Wallet"
      WHERE id = ${walletId}
      FOR UPDATE
    `;

  return result[0] || null;
};