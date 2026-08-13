import { validationResult } from "express-validator";

import AppError from "../utils/AppError.js";

const validate = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    throw new AppError("Validation failed", 400, errors.array());
  }

  next();
};

export default validate;