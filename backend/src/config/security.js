export const securityConfig = {
  rateLimit: {
    windowMs: 15 * 60 * 1000,

    max: 100,
  },

  authRateLimit: {
    windowMs: 15 * 60 * 1000,

    max: 10,
  },

  transactionRateLimit: {
    windowMs: 60 * 1000,

    max: 20,
  },

  maxLoginAttempts: 5,

  lockoutMinutes: 15,
};