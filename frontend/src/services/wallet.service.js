import api from "./api";

export const getWallet = async () => {
  const response = await api.get("/wallet");

  return response.data;
};

export const getWalletBalance = async () => {
  const response = await api.get("/wallet/balance");

  return response.data;
};