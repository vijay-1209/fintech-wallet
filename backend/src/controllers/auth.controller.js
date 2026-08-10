import {
  registerUser,
  loginUser,
  refreshAccessToken,
  logoutUser,
} from "../services/auth.service.js";

import asyncHandler from "../utils/asyncHandler.js";

import {
  AUTH_COOKIE_NAME,
  REFRESH_TOKEN_COOKIE_OPTIONS,
} from "../constants/auth.constants.js";

export const register = asyncHandler(
  async (req, res) => {
    const user = await registerUser(req.body);

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      data: {
        user,
      },
    });
  }
);

export const login = asyncHandler(
  async (req, res) => {
    const {
      email,
      password,
    } = req.body;

    const result = await loginUser(
      email,
      password
    );

    res.cookie(
      AUTH_COOKIE_NAME,
      result.refreshToken,
      REFRESH_TOKEN_COOKIE_OPTIONS
    );

    return res.status(200).json({
      success: true,
      message: "Login successful",
      data: {
        user: result.user,
        accessToken: result.accessToken,
      },
    });
  }
);

export const refresh = asyncHandler(
  async (req, res) => {
    const refreshToken =
      req.cookies[AUTH_COOKIE_NAME];

    const result =
      await refreshAccessToken(refreshToken);

    res.cookie(
      AUTH_COOKIE_NAME,
      result.refreshToken,
      REFRESH_TOKEN_COOKIE_OPTIONS
    );

    return res.status(200).json({
      success: true,
      message: "Token refreshed successfully",
      data: {
        accessToken: result.accessToken,
      },
    });
  }
);

export const logout = asyncHandler(
  async (req, res) => {
    const refreshToken =
      req.cookies[AUTH_COOKIE_NAME];

    await logoutUser(refreshToken);

    res.clearCookie(
      AUTH_COOKIE_NAME,
      REFRESH_TOKEN_COOKIE_OPTIONS
    );

    return res.status(200).json({
      success: true,
      message: "Logout successful",
    });
  }
);