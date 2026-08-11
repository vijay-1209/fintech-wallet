import { body } from "express-validator";

export const createTopUpValidator = [
  body("amount")
    .notEmpty()
    .withMessage(
      "Amount is required"
    )

    .isDecimal({
      decimal_digits: "0,2",
    })
    .withMessage(
      "Amount must be a valid monetary amount"
    ),
];