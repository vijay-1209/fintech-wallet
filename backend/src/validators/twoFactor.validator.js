import { body } from "express-validator";

export const otpValidator = [
  body("otp")
    .trim()
    .notEmpty()
    .withMessage(
      "OTP is required"
    )
    .isLength({
      min: 6,
      max: 6,
    })
    .withMessage(
      "OTP must contain 6 digits"
    )
    .isNumeric()
    .withMessage(
      "OTP must contain only numbers"
    ),
];