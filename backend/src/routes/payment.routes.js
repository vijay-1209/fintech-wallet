import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";
import { transactionRateLimiter } from "../middlewares/rateLimit.middleware.js";
import validate from "../middlewares/validation.middleware.js";
import idempotency from "../middlewares/idempotency.middleware.js";

import {
  sendPaymentValidator,
} from "../validators/payment.validator.js";
import { createPaymentValidator } from "../validators/payment.validator.js";

import {
  sendPayment,
} from "../controllers/payment.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/",

  authenticate,

  transactionRateLimiter,

  idempotency,

  createPaymentValidator,

  validate,

  createPayment
);

router.post(
  "/send",

  sendPaymentValidator,

  validate,

  sendPayment
);

export default router;