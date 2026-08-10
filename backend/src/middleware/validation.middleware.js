import { validationResult } from "express-validator";

import AppError from "../utils/AppError.js";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const messages = errors.array().map((error) => ({
      field: error.path,
      message: error.msg,
    }));

    return next(
      new AppError("Validation failed", 400, messages)
    );
  }

  next();
};

export default validate;