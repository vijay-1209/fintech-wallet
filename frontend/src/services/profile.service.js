import api from "./api";

export const getProfile = async () => {
  const response = await api.get("/users/profile");

  return response.data;
};

export const updateProfile = async (data) => {
  const response = await api.put("/users/profile", data);

  return response.data;
};

export const changePassword = async (data) => {
  const response = await api.put("/users/change-password", data);

  return response.data;
};

export const updatePreferences = async (data) => {
  const response = await api.put("/users/preferences", data);

  return response.data;
};

export const deleteAccount = async (password) => {
  const response = await api.delete("/users/account", {
    data: {
      password,
    },
  });

  return response.data;
};