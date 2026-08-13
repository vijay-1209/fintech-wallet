import jwt from "jsonwebtoken";

export const generateAccessToken = ({ userId, role }) => {
  return jwt.sign(
    {
      userId,
      role,
    },

    process.env.JWT_ACCESS_SECRET,

    {
      expiresIn: process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    },
  );
};