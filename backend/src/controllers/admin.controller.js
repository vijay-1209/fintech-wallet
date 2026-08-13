import asyncHandler from "../utils/asyncHandler.js";

import {
  getDashboardStats,
  listUsers,
  getUser,
  listTransactions,
  listTopUps,
} from "../services/admin.service.js";

export const getDashboard = asyncHandler(async (req, res) => {
  const stats = await getDashboardStats();

  return res.status(200).json({
    success: true,

    data: stats,
  });
});

export const getUsersList = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, search } = req.query;

  const result = await listUsers({
    page,
    limit,
    search,
  });

  return res.status(200).json({
    success: true,

    data: result,
  });
});

export const getUserDetails = asyncHandler(async (req, res) => {
  const user = await getUser(req.params.userId);

  return res.status(200).json({
    success: true,

    data: user,
  });
});

export const getTransactionList = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, status, type } = req.query;

  const result = await listTransactions({
    page,
    limit,
    status,
    type,
  });

  return res.status(200).json({
    success: true,

    data: result,
  });
});

export const getTopUpList = asyncHandler(async (req, res) => {
  const { page = 1, limit = 20, status } = req.query;

  const result = await listTopUps({
    page,
    limit,
    status,
  });

  return res.status(200).json({
    success: true,

    data: result,
  });
});