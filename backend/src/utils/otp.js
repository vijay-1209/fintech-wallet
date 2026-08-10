import crypto from "crypto";

export const generateOtp = () => {
  return crypto
    .randomInt(100000, 1000000)
    .toString();
};

export const hashOtp = (otp) => {
  return crypto
    .createHash("sha256")
    .update(otp)
    .digest("hex");
};

export const generateOtpExpiry = (
  minutes = 5
) => {
  return new Date(
    Date.now() +
      minutes * 60 * 1000
  );
};

export const generateTwoFactorSecret = () => {
  return crypto
    .randomBytes(32)
    .toString("hex");
};