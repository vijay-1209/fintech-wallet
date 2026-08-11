export const toMoney = (value) => {
  return Number(
    Number(value).toFixed(2)
  );
};

export const isPositiveAmount = (
  amount
) => {
  return (
    Number(amount) > 0
  );
};