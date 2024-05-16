const winston = require("winston");
const { logEvents } = require("./logger");

// Middleware to handle errors with Winston logging
const errorHandler = (err, req, res, next) => {
  // Log the error using Winston
  winston.error(`${err.name}: ${err.message}`, {
    method: req.method,
    url: req.url,
    origin: req.headers.origin,
    stack: err.stack, // Include the error stack for detailed information
  });

  // Log the error to a file using the existing logEvents function
  logEvents(
    `${err.name}: ${err.message}\t${req.method}\t${req.url}\t${req.headers.origin}`,
    "errLog.log"
  );

  const status = res.statusCode ? res.statusCode : 500; // Server error

  res.status(status);

  res.json({ message: err.message });
};

module.exports = errorHandler;
