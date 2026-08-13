import AppError from "../utils/AppError.js";

import {
  getAdminDashboardStats,
  getUsers,
  getUserDetails,
  getTransactions,
  getTopUps,
} from "../repositories/admin.repository.js";

export const getDashboardStats = async () => {
  return getAdminDashboardStats();
};

export const listUsers = async ({ page, limit, search }) => {
  return getUsers({
    page: Number(page) || 1,

    limit: Math.min(Number(limit) || 20, 100),

    search,
  });
};

export const getUser = async (userId) => {
  const user = await getUserDetails(userId);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  return user;
};

export const listTransactions = async ({ page, limit, status, type }) => {
  return getTransactions({
    page: Number(page) || 1,

    limit: Math.min(Number(limit) || 20, 100),

    status,

    type,
  });
};

export const listTopUps = async ({ page, limit, status }) => {
  return getTopUps({
    page: Number(page) || 1,

    limit: Math.min(Number(limit) || 20, 100),

    status,
  });
};