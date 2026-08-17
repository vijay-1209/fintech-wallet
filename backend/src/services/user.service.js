import bcrypt from "bcryptjs";

import {
  createUser,
  findUserById,
  findUserByEmail,
  findUserWithPassword,
  emailExists,
  updateUser,
  updatePassword,
  updateNotificationPreferences,
  updateTwoFactor,
  deleteUser,
} from "../models/user.model.js";

/**
 * Get user profile
 */
export const getUserProfile = async (userId) => {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return user;
};

/**
 * Get user by ID
 */
export const getUserById = async (userId) => {
  return await getUserProfile(userId);
};

/**
 * Get user by email
 */
export const getUserByEmail = async (email) => {
  return await findUserByEmail(email);
};

/**
 * Create/register user
 */
export const registerUser = async ({ name, email, password, phone }) => {
  const exists = await emailExists(email);

  if (exists) {
    const error = new Error("An account with this email already exists");

    error.statusCode = 409;

    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  return await createUser({
    name,
    email,
    password: hashedPassword,
    phone,
  });
};

/**
 * Update user profile
 */
export const updateUserProfile = async (userId, data) => {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return await updateUser(userId, data);
};

/**
 * Change password
 */
export const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await findUserWithPassword(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  const validPassword = await bcrypt.compare(currentPassword, user.password);

  if (!validPassword) {
    const error = new Error("Current password is incorrect");

    error.statusCode = 401;

    throw error;
  }

  if (currentPassword === newPassword) {
    const error = new Error(
      "New password must be different from the current password",
    );

    error.statusCode = 400;

    throw error;
  }

  const hashedPassword = await bcrypt.hash(newPassword, 12);

  await updatePassword(userId, hashedPassword);

  return {
    message: "Password changed successfully",
  };
};

/**
 * Update notification preferences
 */
export const updateUserNotifications = async (userId, preferences) => {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return await updateNotificationPreferences(userId, preferences);
};

/**
 * Update two-factor authentication
 */
export const updateUserTwoFactor = async (
  userId,
  { enabled, secret = null, backupCodes = [] },
) => {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return await updateTwoFactor(userId, {
    enabled,
    secret,
    backupCodes,
  });
};

/**
 * Delete user account
 */
export const removeUser = async (userId) => {
  const user = await findUserById(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  await deleteUser(userId);

  return {
    message: "User account deleted successfully",
  };
};