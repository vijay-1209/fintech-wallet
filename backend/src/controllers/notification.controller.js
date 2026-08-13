import asyncHandler from "../utils/asyncHandler.js";

import {
  listNotifications,
  getUnreadCount,
  readNotification,
  readAllNotifications,
  removeNotification,
} from "../services/notification.service.js";

export const getNotifications = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20 } = req.query;

  const result = await listNotifications({
    userId: req.user.id,

    page,

    limit,
  });

  return res.status(200).json({
    success: true,

    data: result,
  });
});

export const getUnreadNotifications = asyncHandler(async (req, res) => {
  const count = await getUnreadCount(req.user.id);

  return res.status(200).json({
    success: true,

    data: {
      unreadCount: count,
    },
  });
});

export const markAsRead = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;

  const result = await readNotification({
    userId: req.user.id,

    notificationId,
  });

  return res.status(200).json({
    success: true,

    message: "Notification marked as read",

    data: result,
  });
});

export const markAllAsRead = asyncHandler(async (req, res) => {
  await readAllNotifications(req.user.id);

  return res.status(200).json({
    success: true,

    message: "All notifications marked as read",
  });
});

export const deleteNotification = asyncHandler(async (req, res) => {
  const { notificationId } = req.params;

  await removeNotification({
    userId: req.user.id,

    notificationId,
  });

  return res.status(200).json({
    success: true,

    message: "Notification deleted",
  });
});
