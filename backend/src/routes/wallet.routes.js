import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import validate from "../middlewares/validation.middleware.js";

import {
  moneyValidator,
} from "../validators/wallet.validator.js";

import {
  getMyWallet,
  deposit,
  withdraw,
  freeze,
  unfreeze,
  getTransactions,
} from "../controllers/wallet.controller.js";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  getMyWallet
);

router.get(
  "/transactions",
  getTransactions
);

router.post(
  "/deposit",
  moneyValidator,
  validate,
  deposit
);

router.post(
  "/withdraw",
  moneyValidator,
  validate,
  withdraw
);

router.post(
  "/freeze",
  freeze
);

router.post(
  "/unfreeze",
  unfreeze
);

export default router;