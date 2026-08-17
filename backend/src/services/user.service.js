import bcrypt from "bcrypt";

import User from "../models/user.model.js";

/**
 * Get user by ID
 */
export const getUserById = async (userId) => {
  const user = await User.findById(userId).select(
    "-password -twoFactorSecret -backupCodes",
  );

  if (!user) {
    const error = new Error("User not found");
    error.statusCode = 404;
    throw error;
  }

  return user;
};

/**
 * Get user by email
 */
export const getUserByEmail = async (email) => {
  const user = await User.findOne({
    email: email.toLowerCase().trim(),
  }).select("-password -twoFactorSecret -backupCodes");

  return user;
};

/**
 * Get user by email including password
 *
 * Used internally for authentication.
 */
export const getUserForAuthentication = async (email) => {
  const user = await User.findOne({
    email: email.toLowerCase().trim(),
  }).select("+password +twoFactorSecret +backupCodes");

  return user;
};

/**
 * Create a new user
 */
export const createUser = async ({ name, email, password, phone }) => {
  const normalizedEmail = email.toLowerCase().trim();

  const existingUser = await User.findOne({
    email: normalizedEmail,
  });

  if (existingUser) {
    const error = new Error("An account with this email already exists");

    error.statusCode = 409;

    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    name: name.trim(),
    email: normalizedEmail,
    password: hashedPassword,
    phone: phone?.trim() || null,
  });

  return user.toObject({
    transform: (_, ret) => {
      delete ret.password;
      delete ret.twoFactorSecret;
      delete ret.backupCodes;

      return ret;
    },
  });
};

/**
 * Update user profile
 */
export const updateUser = async (userId, updateData) => {
  const allowedFields = ["name", "phone"];

  const updates = {};

  for (const field of allowedFields) {
    if (updateData[field] !== undefined) {
      updates[field] =
        typeof updateData[field] === "string"
          ? updateData[field].trim()
          : updateData[field];
    }
  }

  if (Object.keys(updates).length === 0) {
    const error = new Error("No valid fields provided for update");

    error.statusCode = 400;

    throw error;
  }

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: updates,
    },
    {
      new: true,
      runValidators: true,
    },
  ).select("-password -twoFactorSecret -backupCodes");

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return user;
};

/**
 * Change user password
 */
export const changePassword = async (userId, currentPassword, newPassword) => {
  const user = await User.findById(userId).select("+password");

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  const passwordMatches = await bcrypt.compare(currentPassword, user.password);

  if (!passwordMatches) {
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

  user.password = hashedPassword;

  await user.save();

  return {
    message: "Password changed successfully",
  };
};

/**
 * Update notification preferences
 */
export const updateNotificationPreferences = async (userId, preferences) => {
  const allowedFields = [
    "emailNotifications",
    "paymentNotifications",
    "securityNotifications",
    "marketingNotifications",
  ];

  const updates = {};

  for (const field of allowedFields) {
    if (preferences[field] !== undefined) {
      updates[`notificationPreferences.${field}`] = Boolean(preferences[field]);
    }
  }

  if (Object.keys(updates).length === 0) {
    const error = new Error("No valid notification preferences provided");

    error.statusCode = 400;

    throw error;
  }

  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: updates,
    },
    {
      new: true,
      runValidators: true,
    },
  ).select("-password -twoFactorSecret -backupCodes");

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return user;
};

/**
 * Update 2FA status
 */
export const updateTwoFactorStatus = async (userId, enabled) => {
  const user = await User.findByIdAndUpdate(
    userId,
    {
      $set: {
        twoFactorEnabled: Boolean(enabled),
      },
    },
    {
      new: true,
      runValidators: true,
    },
  ).select("-password -twoFactorSecret -backupCodes");

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  return user;
};

/**
 * Delete user account
 */
export const deleteUser = async (userId) => {
  const user = await User.findById(userId);

  if (!user) {
    const error = new Error("User not found");

    error.statusCode = 404;

    throw error;
  }

  await User.findByIdAndDelete(userId);

  return {
    message: "User account deleted successfully",
  };
};