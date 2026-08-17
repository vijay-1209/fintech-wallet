import asyncHandler from "../utils/asyncHandler.js";

import {
  getUserProfile,
  updateUserProfile,
  changePassword,
  updateUserNotifications,
  removeUser,
} from "../services/user.service.js";

/**
 * Get currently authenticated user
 * GET /api/users/me
 */
export const getCurrentUser = async (req, res, next) => {
  try {
    const user = await getUserProfile(req.user.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get user profile
 * GET /api/users/profile
 */
export const getProfile = async (req, res, next) => {
  try {
    const user = await getUserProfile(req.user.id);

    return res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update user profile
 * PUT /api/users/profile
 */
export const updateProfile = async (req, res, next) => {
  try {
    const user = await updateUserProfile(req.user.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Change user password
 * PUT /api/users/change-password
 */
export const changeUserPassword = async (req, res, next) => {
  try {
    const { currentPassword, newPassword } = req.body;

    const result = await changePassword(
      req.user.id,
      currentPassword,
      newPassword,
    );

    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Update notification preferences
 * PUT /api/users/notifications
 */
export const updateNotifications = async (req, res, next) => {
  try {
    const preferences = await updateUserNotifications(req.user.id, req.body);

    return res.status(200).json({
      success: true,
      message: "Notification preferences updated successfully",
      data: preferences,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Delete current user account
 * DELETE /api/users/account
 */
export const deleteAccount = async (req, res, next) => {
  try {
    const result = await removeUser(req.user.id);

    return res.status(200).json({
      success: true,
      ...result,
    });
  } catch (error) {
    next(error);
  }
};