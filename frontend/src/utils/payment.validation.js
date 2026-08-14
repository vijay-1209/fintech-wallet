export const validateAmount = (amount) => {
  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount)) {
    return "Enter a valid amount.";
  }

  if (numericAmount <= 0) {
    return "Amount must be greater than zero.";
  }

  if (numericAmount > 100000) {
    return "Amount exceeds the maximum allowed limit.";
  }

  return "";
};

export const validateRecipient = (recipient) => {
  if (!recipient || !recipient.trim()) {
    return "Recipient is required.";
  }

  return "";
};