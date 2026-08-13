import prisma from "../config/prisma.js";

export const createAuditLog = async ({
  userId,
  action,
  resource,
  resourceId,
  ipAddress,
  userAgent,
  metadata,
}) => {
  return prisma.auditLog.create({
    data: {
      userId,

      action,

      resource,

      resourceId,

      ipAddress,

      userAgent,

      metadata,
    },
  });
};