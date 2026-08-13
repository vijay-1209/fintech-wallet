import { verifyAccessToken } from "../utils/token.js";
import AppError from "../utils/AppError.js";
import { findUserById } from "../repositories/auth.repository.js";

const authenticate = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization;

    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new AppError("Authentication required", 401);
    }

    const token = authorization.split(" ")[1];

    const decoded = verifyAccessToken(token);

    const user = await findUserById(decoded.userId);

    if (!user) {
      throw new AppError("User account not found", 401);
    }

    req.user = {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
      role: user.role,
      isTwoFAEnabled: user.isTwoFAEnabled,
    };

    next();
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return next(new AppError("Invalid access token", 401));
    }

    if (error.name === "TokenExpiredError") {
      return next(new AppError("Access token expired", 401));
    }

    next(error);
  }
};

export default authenticate;