import rateLimit from "express-rate-limit";

import { securityConfig } from "../config/security.js";

export const apiRateLimiter = rateLimit({
  windowMs: securityConfig.rateLimit.windowMs,

  max: securityConfig.rateLimit.max,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,

    message: "Too many requests. Please try again later.",
  },
});

import rateLimit from "express-rate-limit";

import { securityConfig } from "../config/security.js";

export const apiRateLimiter = rateLimit({
  windowMs: securityConfig.rateLimit.windowMs,

  max: securityConfig.rateLimit.max,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,

    message: "Too many requests. Please try again later.",
  },
});

export const transactionRateLimiter = rateLimit({
  windowMs: securityConfig.transactionRateLimit.windowMs,

  max: securityConfig.transactionRateLimit.max,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,

    message: "Too many transaction requests. Please try again later.",
  },
});