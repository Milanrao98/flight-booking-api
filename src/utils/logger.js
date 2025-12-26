import fs from "fs";

export const logError = (req, error) => {
  const log = {
    level: "error",
    timestamp: new Date().toString(),
    requestURL: req.originalUrl,
    errorMessage: error.message
  };

  fs.appendFileSync("error.log", JSON.stringify(log) + "\n");
};
