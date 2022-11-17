const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const { pool } = require("./database/queries");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// ROUTES
const validate = require("./routes/validate");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");

// PERSONAL MIDDLEWARES
app.use("/", validate);
app.use("/", loginRoute);
app.use("/", registerRoute);

// DEV ROUTE

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello from API" });
});

// UNIVERSAL ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Export APP

module.exports = app;
