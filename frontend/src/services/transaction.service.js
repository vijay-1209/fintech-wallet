import api from "./api";

export const getTransactions = async (params = {}) => {
  const response = await api.get("/transactions", {
    params,
  });

  return response.data;
};

export const getTransactionSummary = async (params = {}) => {
  const response = await api.get("/transactions/summary", {
    params,
  });

  return response.data;
};

export const getTransactionById = async (transactionId) => {
  const response = await api.get(`/transactions/${transactionId}`);

  return response.data;
};