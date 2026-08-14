import api from "./api";

export const getPaymentAnalytics = async (params = {}) => {
  const response = await api.get("/analytics/payments", {
    params,
  });

  return response.data;
};

export const getPaymentSummary = async (params = {}) => {
  const response = await api.get("/analytics/payments/summary", {
    params,
  });

  return response.data;
};

export const getPaymentTrends = async (params = {}) => {
  const response = await api.get("/analytics/payments/trends", {
    params,
  });

  return response.data;
};