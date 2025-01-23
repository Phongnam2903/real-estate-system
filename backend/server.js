const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const httpErrors = require("http-errors");
require("dotenv").config();

const connectDB = require("./dbConnect/db");
const ApiRouter = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

// Route: Root
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to Restful API server" });
});

// Route: /api (Default Response)
app.get("/api", (req, res) => {
  res.status(200).send({ message: "Welcome to the /api endpoint" });
});

// Route: /api (API Router)
app.use("/api", ApiRouter);

// Catch-all 404 Middleware
app.use((req, res, next) => {
  next(httpErrors.NotFound("Route not found"));
});

// Error-handling Middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).send({
    error: {
      status: err.status || 500,
      message: err.message || "Internal Server Error",
    },
  });
});

// Environment Variables
const HOST_NAME = process.env.HOST_NAME || "localhost";
const PORT = process.env.PORT || 1313;

// Start Server
app.listen(PORT, HOST_NAME, () => {
  console.log(`Server running at: http://${HOST_NAME}:${PORT}`);
  connectDB(); // Connect to the database
});
