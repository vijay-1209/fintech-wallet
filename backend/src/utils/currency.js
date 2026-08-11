import { Prisma } from "@prisma/client";

export const rupeesToPaise = (
  amount
) => {
  const decimal =
    new Prisma.Decimal(amount);

  return decimal
    .mul(100)
    .toNumber();
};

export const paiseToRupees = (
  amount
) => {
  return new Prisma.Decimal(
    amount
  ).div(100);
};