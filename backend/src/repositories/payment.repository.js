import prisma from "../config/prisma.js";

export const findTransactionByReference =
  async (reference) => {
    return prisma.transaction.findUnique({
      where: {
        reference,
      },

      include: {
        ledgerEntries: true,
      },
    });
  };

export const findTransactionById =
  async (id) => {
    return prisma.transaction.findUnique({
      where: {
        id,
      },

      include: {
        ledgerEntries: true,
      },
    });
  };