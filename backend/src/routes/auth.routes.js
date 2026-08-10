import { Router } from "express";

import {
  register,
  login,
  refresh,
  logout,
} from "../controllers/auth.controller.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";

import validate from "../middlewares/validation.middleware.js";

const router = Router();

router.post(
  "/register",
  registerValidator,
  validate,
  register
);

router.post(
  "/login",
  loginValidator,
  validate,
  login
);

router.post(
  "/refresh",
  refresh
);

router.post(
  "/logout",
  logout
);

export default router;