export const createNotification = async (
  tx,
  { userId, type, channel = "IN_APP", title, message, data = null },
) => {
  return tx.notification.create({
    data: {
      userId,

      type,

      channel,

      title,

      message,

      data,
    },
  });
};

export const getUserNotifications = async (
  prisma,
  { userId, page = 1, limit = 20 },
) => {
  const skip = (page - 1) * limit;

  const [notifications, total] = await Promise.all([
    prisma.notification.findMany({
      where: {
        userId,
      },

      orderBy: {
        createdAt: "desc",
      },

      skip,

      take: limit,
    }),

    prisma.notification.count({
      where: {
        userId,
      },
    }),
  ]);

  return {
    notifications,

    total,

    page,

    limit,

    totalPages: Math.ceil(total / limit),
  };
};

export const getUnreadNotificationCount = async (prisma, userId) => {
  return prisma.notification.count({
    where: {
      userId,

      status: "UNREAD",
    },
  });
};

export const markNotificationAsRead = async (
  prisma,
  { userId, notificationId },
) => {
  return prisma.notification.updateMany({
    where: {
      id: notificationId,

      userId,
    },

    data: {
      status: "READ",

      readAt: new Date(),
    },
  });
};

export const markAllNotificationsAsRead = async (prisma, userId) => {
  return prisma.notification.updateMany({
    where: {
      userId,

      status: "UNREAD",
    },

    data: {
      status: "READ",

      readAt: new Date(),
    },
  });
};

export const deleteNotification = async (
  prisma,
  { userId, notificationId },
) => {
  return prisma.notification.deleteMany({
    where: {
      id: notificationId,

      userId,
    },
  });
};
