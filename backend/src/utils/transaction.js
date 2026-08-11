import crypto from "crypto";

export const generateTransactionReference =
  () => {
    const timestamp =
      Date.now().toString(36);

    const random =
      crypto
        .randomBytes(6)
        .toString("hex");

    return `TXN-${timestamp}-${random}`.toUpperCase();
  };