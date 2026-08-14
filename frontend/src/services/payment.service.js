import api from "./api";

export const createPayment = async (payload) => {
  const response = await api.post("/payments", payload);

  return response.data;
};

export const getPaymentById = async (paymentId) => {
  const response = await api.get(`/payments/${paymentId}`);

  return response.data;
};

export const verifyPayment = async (paymentId) => {
  const response = await api.post(`/payments/${paymentId}/verify`);

  return response.data;
};