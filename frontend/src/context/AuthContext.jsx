import { createContext, useContext, useEffect, useState } from "react";

import {
  getCurrentUser,
  loginUser,
  logoutUser,
} from "../services/auth.service";

const AuthContext = createContext(null);

const ACCESS_TOKEN_KEY = "accessToken";

const USER_KEY = "user";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [authLoading, setAuthLoading] = useState(false);

  const saveAuthData = ({ user, accessToken }) => {
    if (accessToken) {
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    }

    if (user) {
      localStorage.setItem(USER_KEY, JSON.stringify(user));

      setUser(user);
    }
  };

  const clearAuthData = () => {
    localStorage.removeItem(ACCESS_TOKEN_KEY);

    localStorage.removeItem(USER_KEY);

    setUser(null);
  };

  const login = async (credentials) => {
    setAuthLoading(true);

    try {
      const response = await loginUser(credentials);

      const data = response.data;

      saveAuthData({
        user: data.user,
        accessToken: data.accessToken,
      });

      return {
        success: true,
        data,
      };
    } catch (error) {
      throw error;
    } finally {
      setAuthLoading(false);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch {
      // Clear local authentication
      // even if the server request fails.
    } finally {
      clearAuthData();
    }
  };

  useEffect(() => {
    const initializeAuth = async () => {
      const token = localStorage.getItem(ACCESS_TOKEN_KEY);

      if (!token) {
        setLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser();

        setUser(response.data);
      } catch {
        clearAuthData();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  const isAuthenticated = Boolean(user);

  return (
    <AuthContext.Provider
      value={{
        user,

        loading,

        authLoading,

        isAuthenticated,

        login,

        logout,

        saveAuthData,

        clearAuthData,
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