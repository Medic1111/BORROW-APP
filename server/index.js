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

app.get("/api/v1/search/:user", (req, res) => {
  const username = req.params.user;

  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });

      if (results.rows.length <= 0)
        return res.status(404).json({ message: "User not registered" });

      res.status(200).json({
        user: results.rows[0],
      });
    }
  );
});

// UNIVERSAL ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Export APP

module.exports = app;
