import api from "./api";

import { generateIdempotencyKey } from "../utils/idempotency";

export const createPayment = async (payload, idempotencyKey) => {
  const key = idempotencyKey || generateIdempotencyKey();

  const response = await api.post("/payments", payload, {
    headers: {
      "Idempotency-Key": key,
    },
  });

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