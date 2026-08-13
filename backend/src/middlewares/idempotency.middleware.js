import AppError from "../utils/AppError.js";

const idempotency = (req, res, next) => {
  const key = req.headers["idempotency-key"];

  if (!key) {
    throw new AppError("Idempotency-Key header is required", 400);
  }

  if (typeof key !== "string" || key.length < 16 || key.length > 100) {
    throw new AppError("Invalid idempotency key", 400);
  }

  req.idempotencyKey = key;

  next();
};

export default idempotency;