import { body } from "express-validator";

export const sendPaymentValidator = [
  body("receiverUserId")
    .trim()
    .notEmpty()
    .withMessage(
      "Receiver user ID is required"
    ),

  body("amount")
    .notEmpty()
    .withMessage(
      "Amount is required"
    )
    .isDecimal({
      decimal_digits: "0,2",
    })
    .withMessage(
      "Amount must be a valid monetary value"
    ),

  body("description")
    .optional()
    .trim()
    .isLength({
      max: 255,
    })
    .withMessage(
      "Description cannot exceed 255 characters"
    ),
];