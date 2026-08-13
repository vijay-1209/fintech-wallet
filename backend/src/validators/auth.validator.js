import { body } from "express-validator";

export const registerValidator = [
  body("name")
  .trim()
  .notEmpty()
  .withMessage("Name is required"),

  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("password")
    .isLength({
      min: 8,
    })
    .withMessage("Password must contain at least 8 characters"),
];

export const loginValidator = [
  body("email")
    .trim()
    .isEmail()
    .withMessage("Valid email is required")
    .normalizeEmail(),

  body("password").notEmpty().withMessage("Password is required"),
];