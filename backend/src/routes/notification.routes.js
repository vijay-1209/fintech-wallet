import { Router } from "express";

import authenticate from "../middlewares/auth.middleware.js";

import {
  getNotifications,
  getUnreadNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
} from "../controllers/notification.controller.js";

const router = Router();

router.use(authenticate);

router.get(
  "/",
  getNotifications
);

router.get(
  "/unread-count",
  getUnreadNotifications
);

router.patch(
  "/read-all",
  markAllAsRead
);

router.patch(
  "/:notificationId/read",
  markAsRead
);

router.delete(
  "/:notificationId",
  deleteNotification
);

export default router;