import { Router } from "express";

import {
  getCurrentUser,
} from "../controllers/user.controller.js";

import authenticate from "../middlewares/auth.middleware.js";

const router = Router();

router.get(
  "/me",
  authenticate,
  getCurrentUser
);

export default router;