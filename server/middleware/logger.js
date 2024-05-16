const { format } = require("date-fns");
const { v4: uuid } = require("uuid");
const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const winston = require("winston");
const DailyRotateFile = require("winston-daily-rotate-file");

const logEvents = async (message, logFileName) => {
  const date = new Date(); // Current date and time
  const formattedDate = date.toISOString(); // Convert to ISO format for readability
  const logItem = `${formattedDate}\t${uuid()}\t${message}\n`;

  try {
    if (!fs.existsSync(path.join(__dirname, "..", "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "..", "logs"));
    }
    await fsPromises.appendFile(
      path.join(__dirname, "..", "logs", logFileName),
      logItem
    );
  } catch (err) {
    console.error(err);
  }
};

// Middleware to add a unique request ID to each incoming request
const addRequestId = (req, res, next) => {
  req.requestId = uuid();
  next();
};

// Winston logger with structured JSON logs
const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new DailyRotateFile({
      filename: "logs/application-%DATE%.log",
      datePattern: "MMDDYYYY",
      zippedArchive: true,
      maxSize: "10m",
      maxFiles: "14d",
    }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  );
}

// Middleware to log requests with request ID
const requestLogger = (req, res, next) => {
  const sensitivePaths = ["/users", "/another-sensitive-route"];

  // Check if the request path is in the array or if it's not a static file
  if (sensitivePaths.includes(req.path) || !req.path.startsWith("/static")) {
    const origin = req.headers.origin || "N/A"; // Use 'N/A' if origin is not present
    logger.info(`${req.method}\t${req.url}\t${origin}\t${req.requestId}`);
  }

  // Log to console (optional)
  console.log(`${req.method} ${req.path}`);
  next();
};

module.exports = {
  logger,
  requestLogger,
  logEvents,
  addRequestId,
};
