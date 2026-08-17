import prisma from "../config/prisma.js";

/**
 * Create a new user
 */
export const createUser = async ({ name, email, password, phone = null }) => {
  return await prisma.user.create({
    data: {
      name,
      email: email.toLowerCase().trim(),
      password,
      phone,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      twoFactorEnabled: true,
      notificationPreferences: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

/**
 * Find user by ID
 */
export const findUserById = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      twoFactorEnabled: true,
      twoFactorSecret: true,
      backupCodes: true,
      notificationPreferences: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

/**
 * Find user by email
 */
export const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({
    where: {
      email: email.toLowerCase().trim(),
    },
  });
};

/**
 * Check whether email already exists
 */
export const emailExists = async (email) => {
  const user = await prisma.user.findUnique({
    where: {
      email: email.toLowerCase().trim(),
    },
    select: {
      id: true,
    },
  });

  return Boolean(user);
};

/**
 * Update user profile
 */

export const findUserWithPassword = async (userId) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },

    select: {
      id: true,
      password: true,
    },
  });
};
export const updateUser = async (userId, { name, phone }) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      ...(name !== undefined && {
        name: name.trim(),
      }),

      ...(phone !== undefined && {
        phone: phone?.trim() || null,
      }),
    },

    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      twoFactorEnabled: true,
      notificationPreferences: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

/**
 * Update user password
 */
export const updatePassword = async (userId, hashedPassword) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      password: hashedPassword,
    },

    select: {
      id: true,
      email: true,
      updatedAt: true,
    },
  });
};

/**
 * Update notification preferences
 */
export const updateNotificationPreferences = async (userId, preferences) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      notificationPreferences: preferences,
    },

    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      twoFactorEnabled: true,
      notificationPreferences: true,
      updatedAt: true,
    },
  });
};

/**
 * Update two-factor authentication
 */
export const updateTwoFactor = async (
  userId,
  { enabled, secret = null, backupCodes = [] },
) => {
  return await prisma.user.update({
    where: {
      id: userId,
    },

    data: {
      twoFactorEnabled: enabled,
      twoFactorSecret: secret,
      backupCodes,
    },

    select: {
      id: true,
      name: true,
      email: true,
      phone: true,
      twoFactorEnabled: true,
      notificationPreferences: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

/**
 * Delete user
 */
export const deleteUser = async (userId) => {
  return await prisma.user.delete({
    where: {
      id: userId,
    },

    select: {
      id: true,
    },
  });
};