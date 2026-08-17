import { query } from "../config/prisma.js";

/**
 * Create a new user
 */
export const createUser = async ({ name, email, password, phone = null }) => {
  const sql = `
    INSERT INTO users (
      name,
      email,
      password,
      phone
    )
    VALUES ($1, $2, $3, $4)
    RETURNING
      id,
      name,
      email,
      phone,
      two_factor_enabled,
      notification_preferences,
      created_at,
      updated_at
  `;

  const values = [name, email, password, phone];

  const result = await query(sql, values);

  return result.rows[0];
};

/**
 * Find user by ID
 */
export const findUserById = async (userId) => {
  const sql = `
    SELECT
      id,
      name,
      email,
      phone,
      two_factor_enabled,
      two_factor_secret,
      backup_codes,
      notification_preferences,
      created_at,
      updated_at
    FROM users
    WHERE id = $1
    LIMIT 1
  `;

  const result = await query(sql, [userId]);

  return result.rows[0] || null;
};

/**
 * Find user by email
 */
export const findUserByEmail = async (email) => {
  const sql = `
    SELECT
      id,
      name,
      email,
      password,
      phone,
      two_factor_enabled,
      two_factor_secret,
      backup_codes,
      notification_preferences,
      created_at,
      updated_at
    FROM users
    WHERE LOWER(email) = LOWER($1)
    LIMIT 1
  `;

  const result = await query(sql, [email]);

  return result.rows[0] || null;
};

/**
 * Check whether email already exists
 */
export const emailExists = async (email) => {
  const sql = `
    SELECT EXISTS (
      SELECT 1
      FROM users
      WHERE LOWER(email) = LOWER($1)
    ) AS exists
  `;

  const result = await query(sql, [email]);

  return result.rows[0].exists;
};

/**
 * Update user profile
 */
export const updateUser = async (userId, { name, phone }) => {
  const sql = `
    UPDATE users
    SET
      name = COALESCE($1, name),
      phone = COALESCE($2, phone),
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $3
    RETURNING
      id,
      name,
      email,
      phone,
      two_factor_enabled,
      notification_preferences,
      created_at,
      updated_at
  `;

  const values = [name ?? null, phone ?? null, userId];

  const result = await query(sql, values);

  return result.rows[0] || null;
};

/**
 * Update user password
 */
export const updatePassword = async (userId, hashedPassword) => {
  const sql = `
    UPDATE users
    SET
      password = $1,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $2
    RETURNING
      id,
      email,
      updated_at
  `;

  const result = await query(sql, [hashedPassword, userId]);

  return result.rows[0] || null;
};

/**
 * Update notification preferences
 */
export const updateNotificationPreferences = async (userId, preferences) => {
  const sql = `
      UPDATE users
      SET
        notification_preferences = COALESCE(
          notification_preferences,
          '{}'::jsonb
        ) || $1::jsonb,
        updated_at = CURRENT_TIMESTAMP
      WHERE id = $2
      RETURNING
        id,
        name,
        email,
        phone,
        two_factor_enabled,
        notification_preferences,
        updated_at
    `;

  const values = [JSON.stringify(preferences), userId];

  const result = await query(sql, values);

  return result.rows[0] || null;
};

/**
 * Update two-factor authentication
 */
export const updateTwoFactor = async (
  userId,
  { enabled, secret = null, backupCodes = [] },
) => {
  const sql = `
    UPDATE users
    SET
      two_factor_enabled = $1,
      two_factor_secret = $2,
      backup_codes = $3,
      updated_at = CURRENT_TIMESTAMP
    WHERE id = $4
    RETURNING
      id,
      name,
      email,
      phone,
      two_factor_enabled,
      notification_preferences,
      created_at,
      updated_at
  `;

  const values = [enabled, secret, backupCodes, userId];

  const result = await query(sql, values);

  return result.rows[0] || null;
};

/**
 * Delete user
 */
export const deleteUser = async (userId) => {
  const sql = `
    DELETE FROM users
    WHERE id = $1
    RETURNING id
  `;

  const result = await query(sql, [userId]);

  return result.rows[0] || null;
};