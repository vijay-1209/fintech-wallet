import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import validate from "../middlewares/validation.middleware.js";

import {
  transferValidator,
  idempotencyKeyValidator,
} from "../validators/payment.validator.js";

import {
  transferMoney,
  getHistory,
} from "../controllers/payment.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/transfer",

  idempotencyKeyValidator,

  transferValidator,

  validate,

  transferMoney
);

router.get(
  "/history",

  getHistory
);

export default router;