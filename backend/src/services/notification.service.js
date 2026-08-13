import prisma from "../config/prisma.js";

import AppError from "../utils/AppError.js";

import {
  createNotification,
  getUserNotifications,
  getUnreadNotificationCount,
  markNotificationAsRead,
  markAllNotificationsAsRead,
  deleteNotification,
} from "../repositories/notification.repository.js";

export const sendNotification = async ({
  userId,
  type,
  title,
  message,
  data = null,
  channel = "IN_APP",
}) => {
  return prisma.$transaction(async (tx) => {
    return createNotification(tx, {
      userId,

      type,

      channel,

      title,

      message,

      data,
    });
  });
};

export const listNotifications = async ({ userId, page = 1, limit = 20 }) => {
  return getUserNotifications(prisma, {
    userId,

    page: Number(page),

    limit: Math.min(Number(limit), 100),
  });
};

export const getUnreadCount = async (userId) => {
  return getUnreadNotificationCount(prisma, userId);
};

export const readNotification = async ({ userId, notificationId }) => {
  const result = await markNotificationAsRead(prisma, {
    userId,

    notificationId,
  });

  if (result.count === 0) {
    throw new AppError("Notification not found", 404);
  }

  return {
    success: true,
  };
};

export const readAllNotifications = async (userId) => {
  await markAllNotificationsAsRead(prisma, userId);

  return {
    success: true,
  };
};

export const removeNotification = async ({ userId, notificationId }) => {
  const result = await deleteNotification(prisma, {
    userId,

    notificationId,
  });

  if (result.count === 0) {
    throw new AppError("Notification not found", 404);
  }

  return {
    success: true,
  };
};