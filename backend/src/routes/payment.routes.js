import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";
import { transactionRateLimiter } from "../middlewares/rateLimit.middleware.js";
import validate from "../middlewares/validation.middleware.js";
import idempotency from "../middlewares/idempotency.middleware.js";

import {
  sendPaymentValidator,
  createPaymentValidator,
} from "../validators/payment.validator.js";

import {
  createPayment,
  sendPayment,
} from "../controllers/payment.controller.js";

const router = Router();

/*
|--------------------------------------------------------------------------
| Authentication
|--------------------------------------------------------------------------
| All payment routes require an authenticated user.
*/
router.use(authenticate);

/*
|--------------------------------------------------------------------------
| Create Payment
|--------------------------------------------------------------------------
| POST /api/payments
|
| Middleware order:
| 1. Authentication
| 2. Rate limiting
| 3. Idempotency protection
| 4. Request validation
| 5. Controller
*/
router.post(
  "/",
  transactionRateLimiter,
  idempotency,
  createPaymentValidator,
  validate,
  createPayment,
);

/*
|--------------------------------------------------------------------------
| Send Payment
|--------------------------------------------------------------------------
| POST /api/payments/send
|
| This route uses the existing send-payment
| validator and controller.
*/
router.post("/send", sendPaymentValidator, validate, sendPayment);

export default router;