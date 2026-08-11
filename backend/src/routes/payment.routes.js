import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import validate from "../middlewares/validation.middleware.js";

import {
  sendPaymentValidator,
} from "../validators/payment.validator.js";

import {
  sendPayment,
} from "../controllers/payment.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/send",

  sendPaymentValidator,

  validate,

  sendPayment
);

export default router;