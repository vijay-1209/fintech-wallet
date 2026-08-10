import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import validate from "../middlewares/validation.middleware.js";

import {
  createPaymentRequestValidator,
} from "../validators/paymentRequest.validator.js";

import {
  createPaymentRequest,
  getPaymentRequests,
  getPaymentRequest,
  acceptPaymentRequest,
  rejectPaymentRequest,
  cancelPaymentRequest,
} from "../controllers/paymentRequest.controller.js";

const router = Router();

router.use(authenticate);

router.post(
  "/",

  createPaymentRequestValidator,

  validate,

  createPaymentRequest
);

router.get(
  "/",

  getPaymentRequests
);

router.get(
  "/:requestId",

  getPaymentRequest
);

router.post(
  "/:requestId/accept",

  acceptPaymentRequest
);

router.post(
  "/:requestId/reject",

  rejectPaymentRequest
);

router.post(
  "/:requestId/cancel",

  cancelPaymentRequest
);

export default router;