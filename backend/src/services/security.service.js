import { sendNotification } from "./notification.service.js";

export const notifySuspiciousActivity = async ({ userId, reason }) => {
  await sendNotification({
    userId,

    type: "SECURITY",

    title: "Security Alert",

    message: reason,

    data: {
      securityEvent: true,
    },
  });
};