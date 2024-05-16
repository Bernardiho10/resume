require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const corsOptions = require("./config/corsOptions");
const db = require("./config/dbConnection");
const mongoose = require("mongoose");
const {
  logger,
  requestLogger,
  logEvents,
  addRequestId,
} = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const PORT = process.env.PORT || 3500;

db();

// app.use(logger);
app.use(addRequestId);
app.use(requestLogger);
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));
app.use("/users", require("./routes/users"));
app.use("/portfolio", require("./routes/portfolio"));

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDb");
  app.listen(PORT, () => {
    console.log(`Bernardiho Server listening on port ${PORT}`);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(`Bernardiho Server error: ${err}`);
});
