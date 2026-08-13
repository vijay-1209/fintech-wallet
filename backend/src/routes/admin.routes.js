import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import requireAdmin from "../middlewares/admin.middleware.js";

import {
  getDashboard,
  getUsersList,
  getUserDetails,
  getTransactionList,
  getTopUpList,
} from "../controllers/admin.controller.js";

const router = Router();

router.use(authenticate);

router.use(requireAdmin);

router.get("/dashboard", getDashboard);

router.get("/users", getUsersList);

router.get("/users/:userId", getUserDetails);

router.get("/transactions", getTransactionList);

router.get("/topups", getTopUpList);

export default router;