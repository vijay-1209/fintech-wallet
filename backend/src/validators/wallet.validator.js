import { body } from "express-validator";

export const moneyValidator = [
  body("amount")
    .notEmpty()
    .withMessage("Amount is required")
    .isDecimal({
      decimal_digits: "0,2",
    })
    .withMessage(
      "Amount must be a valid number with up to 2 decimal places"
    )
    .custom((value) => {
      if (Number(value) <= 0) {
        throw new Error(
          "Amount must be greater than zero"
        );
      }

      return true;
    }),

  body("note")
    .optional()
    .trim()
    .isLength({
      max: 250,
    })
    .withMessage(
      "Note cannot exceed 250 characters"
    ),
];