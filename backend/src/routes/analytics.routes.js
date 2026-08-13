import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import {
  getDashboard,
} from "../controllers/analytics.controller.js";

const router = Router();

router.use(authenticate);

router.get(
  "/summary",
  getDashboard
);

export default router;