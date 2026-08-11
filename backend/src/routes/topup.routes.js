import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import validate from "../middlewares/validation.middleware.js";

import {
  createTopUpValidator,
} from "../validators/topup.validator.js";

import {
  createTopUp,
} from "../controllers/topup.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/verify",
  verifyTopUpPayment
);

router.post(
  "/create-order",

  createTopUpValidator,

  validate,

  createTopUp
);

export default router;