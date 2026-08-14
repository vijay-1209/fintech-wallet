export const validateAmount = (amount) => {
  const value = Number(amount);

  if (!amount) {
    return "Amount is required.";
  }

  if (!Number.isFinite(value)) {
    return "Enter a valid amount.";
  }

  if (value <= 0) {
    return "Amount must be greater than zero.";
  }

  if (value < 1) {
    return "Minimum amount is ₹1.";
  }

  if (value > 100000) {
    return "Maximum transaction amount is ₹1,00,000.";
  }

  return "";
};

export const validateRecipient = (recipient) => {
  if (!recipient?.trim()) {
    return "Recipient is required.";
  }

  return "";
};

export const validateDescription = (description) => {
  if (description && description.length > 200) {
    return "Description cannot exceed 200 characters.";
  }

  return "";
};