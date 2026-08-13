import api from "./api";

export const registerUser = async (payload) => {
  const response = await api.post("/auth/register", payload);

  return response.data;
};

export const loginUser = async (payload) => {
  const response = await api.post("/auth/login", payload);

  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("/auth/me");

  return response.data;
};

export const logoutUser = async () => {
  const response = await api.post("/auth/logout");

  return response.data;
};