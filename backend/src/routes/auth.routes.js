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
import { authRateLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router();

router.post("/register", registerValidator, validate, authRateLimiter, register);

router.post("/login", loginValidator, validate, authRateLimiter, login);

router.post("/refresh", refresh);

router.post("/logout", logout);

export default router;
