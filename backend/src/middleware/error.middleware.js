const errorHandler = (err, req, res, next) => {
  console.error(err);

  const statusCode = err.statusCode || 500;

  const response = {
    success: false,
    message:
      err.isOperational || statusCode < 500
        ? err.message
        : "Internal Server Error",
  };

  if (err.details) {
    response.errors = err.details;
  }

  return res.status(statusCode).json(response);
};

export default errorHandler;