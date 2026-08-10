import { body } from "express-validator";

export const transferValidator = [
  body("recipientEmail")
    .trim()
    .notEmpty()
    .withMessage(
      "Recipient email is required"
    )
    .isEmail()
    .withMessage(
      "Recipient email must be valid"
    )
    .normalizeEmail(),

  body("amount")
    .notEmpty()
    .withMessage(
      "Payment amount is required"
    )

    .isDecimal({
      decimal_digits: "0,2",
    })
    .withMessage(
      "Amount must contain a valid monetary value"
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

export const idempotencyKeyValidator = (
  req,
  res,
  next
) => {
  const key =
    req.headers["idempotency-key"];

  if (!key) {
    return res.status(400).json({
      success: false,
      message:
        "Idempotency-Key header is required",
    });
  }

  if (
    typeof key !== "string" ||
    key.length < 16 ||
    key.length > 100
  ) {
    return res.status(400).json({
      success: false,
      message:
        "Idempotency-Key must be between 16 and 100 characters",
    });
  }

  next();
};