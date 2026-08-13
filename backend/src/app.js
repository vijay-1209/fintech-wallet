import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import healthRoutes from "./routes/health.routes.js";
import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user.routes.js";
import walletRoutes from "./routes/wallet.routes.js";
import paymentRoutes from "./routes/payment.routes.js";
import paymentRequestRoutes from "./routes/paymentRequest.routes.js";
import twoFactorRoutes from "./routes/twoFactor.routes.js";
import topUpRoutes from "./routes/topup.routes.js";
import analyticsRoutes from "./routes/analytics.routes.js";
import notificationRoutes from "./routes/notification.routes.js";
import adminRoutes from "./routes/admin.routes.js";

import errorHandler from "./middlewares/error.middleware.js";
import securityHeaders from "./middlewares/security.middleware.js";

import { apiRateLimiter } from "./middlewares/rateLimit.middleware.js";

const app = express();

app.use(securityHeaders);

app.use(apiRateLimiter);

app.use(
  express.json({
    limit: "1mb",
  }),
);

app.use(
  express.urlencoded({
    extended: true,

    limit: "1mb",
  }),
);

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(helmet());

app.use(express.json());

app.use(cookieParser());

app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "FinTech Wallet API",
  });
});

app.use("/api/v1/health", healthRoutes);

app.use("/api/v1/auth", authRoutes);

app.use("/api/v1/users", userRoutes);

app.use("/api/v1/wallet", walletRoutes);

app.use("/api/v1/payment", paymentRoutes);

app.use("/api/v1/payment-requests", paymentRequestRoutes);

app.use("/api/v1/2fa", twoFactorRoutes);

app.use("/api/v1/topups", topUpRoutes);

app.use("/api/v1/analytics", analyticsRoutes);

app.use("/api/v1/notifications", notificationRoutes);

app.use("/api/v1/admin", adminRoutes);

app.use(errorHandler);

export default app;