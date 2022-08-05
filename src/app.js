const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

const api = require("./api");

// Init Express
const app = express();

// App Middleware
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

// Routes
app.use("/api", api);

app.use((req, res, next) => {
  res.status(404);
  const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
  next(error);
});

app.use((err, req, res, next) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack,
  });
});

module.exports = app;
