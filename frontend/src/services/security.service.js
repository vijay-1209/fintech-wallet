import api from "./api";

export const getSecurityStatus = async () => {
  const response = await api.get("/auth/2fa/status");

  return response.data;
};

export const setupTwoFactor = async () => {
  const response = await api.post("/auth/2fa/setup");

  return response.data;
};

export const verifyTwoFactorSetup = async (otp) => {
  const response = await api.post("/auth/2fa/verify-setup", {
    otp,
  });

  return response.data;
};

export const disableTwoFactor = async (otp) => {
  const response = await api.post("/auth/2fa/disable", {
    otp,
  });

  return response.data;
};

export const regenerateBackupCodes = async (otp) => {
  const response = await api.post("/auth/2fa/backup-codes/regenerate", {
    otp,
  });

  return response.data;
};

export const getSecurityActivity = async () => {
  const response = await api.get("/auth/security/activity");

  return response.data;
};