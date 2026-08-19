import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validation.middleware.js";

import {
  createTopUp,
  verifyTopUpPayment,
} from "../controllers/topup.controller.js";

import {
  createTopUpValidator,
  // verifyTopUpPaymentValidator,
} from "../validators/topup.validator.js";

const router = Router();

router.use(authenticate);

router.post("/", createTopUpValidator, validate, createTopUp);

/*
router.post(
  "/verify",
  verifyTopUpPaymentValidator,
  validate,
  verifyTopUpPayment,
);
*/

export default router;