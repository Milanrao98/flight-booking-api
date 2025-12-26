import { logError } from "../utils/logger.js";

export const errorHandler = (err, req, res, next) => {
  logError(req, err);

  res.status(err.statusCode || 500).json({
    message:
      err.message ||
      "Oops! Something went wrong... Please try again later!"
  });
};
