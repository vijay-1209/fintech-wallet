import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import validate from "../middlewares/validation.middleware.js";

import {
  otpValidator,
} from "../validators/twoFactor.validator.js";

import {
  enableTwoFactor,
  confirmEnableTwoFactorController,
  disableTwoFactor,
  confirmDisableTwoFactorController,
} from "../controllers/twoFactor.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/enable",

  enableTwoFactor
);

router.post(
  "/enable/verify",

  otpValidator,

  validate,

  confirmEnableTwoFactorController
);

router.post(
  "/disable",

  disableTwoFactor
);

router.post(
  "/disable/verify",

  otpValidator,

  validate,

  confirmDisableTwoFactorController
);

export default router;