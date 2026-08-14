import { createContext, useContext, useEffect, useState } from "react";

import {
  getCurrentUser,
  logout as logoutService,
} from "../services/auth.service";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const response = await getCurrentUser();

      setUser(response.data);

      localStorage.setItem("user", JSON.stringify(response.data));
    } catch {
      logoutService();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUser();
  }, []);

  const login = (authData) => {
    const { accessToken, user } = authData;

    localStorage.setItem("accessToken", accessToken);

    localStorage.setItem("user", JSON.stringify(user));

    setUser(user);
  };

  const logout = () => {
    logoutService();
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
};