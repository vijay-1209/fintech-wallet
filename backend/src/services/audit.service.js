import { createAuditLog } from "../repositories/audit.repository.js";

export const recordAudit = async ({
  userId,
  action,
  resource,
  resourceId,
  req,
  metadata,
}) => {
  return createAuditLog({
    userId,

    action,

    resource,

    resourceId,

    ipAddress: req?.ip || null,

    userAgent: req?.get("user-agent") || null,

    metadata: metadata || null,
  });
};