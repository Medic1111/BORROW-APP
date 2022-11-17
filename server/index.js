const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();
const app = express();
const db = require("./database/queries");
const { pool } = require("./database/queries");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DEV ROUTE

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello from API" });
});

app.post("/api/v1/register", (req, res) => {
  const { email, username, password } = req.body;

  if (email.trim() === "" || username.trim() === "" || password.trim() === "") {
    return res.status(422).json({ message: "All fields are required" });
  } else if (password.length <= 5) {
    return res
      .status(400)
      .json({ message: "Password must contain at least 6 characters" });
  }

  let user = {};
  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results) => {
      if (error) {
        return res.status(500).json({ message: "Oops, something went wrong" });
      }
      user = results.rows;
      if (user.length > 0) {
        return res
          .status(409)
          .json({ message: "Username or Email already registered" });
      } else {
        const hash = bcrypt.hashSync(password, 10);
        pool.query(
          `INSERT INTO users (username, password, email) VALUES ('${username}', '${hash}', '${email}') RETURNING * ;`,
          (error, results) => {
            console.log(error);
            if (error) {
              return res.json({ message: "Error" });
            }

            let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
              expiresIn: "600s",
            });

            res.status(201).json({
              username: results.rows[0],
              token,
            });
          }
        );
      }
    }
  );
});

app.post("/api/v1/login", (req, res) => {
  const { email, username, password } = req.body;
  if (username.trim() === "" || password.trim() === "") {
    return res.status(422).json({ message: "All fields are required" });
  } else if (password.length <= 5) {
    return res
      .status(400)
      .json({ message: "Password must contain at least 6 characters" });
  }
  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results) => {
      console.log(results);
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Oops, something went wrong" });
      }
      if (results.rows.length <= 0) {
        return res.status(404).json({ message: "User not registered" });
      }
      console.log(results.rows[0]);

      bcrypt.compare(password, results.rows[0].password, (err, match) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Oops, something went wrong with your request" });
        }
        if (!match) {
          return res.status(403).json({ message: "Incorrect password" });
        }

        let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
          expiresIn: "600s",
        });

        res.status(201).json({
          user: results.rows[0],
          token,
        });
      });
    }
  );
});

app.get("/api/v1/validate", (req, res) => {
  let token = req.headers.authorization;

  if (!token) {
    res.status(401).json({ message: "No token found" });
  } else {
    jwt.verify(token, `${process.env.TOKEN_SECRET}`, (err, verified) => {
      if (err) {
        return res
          .status(401)
          .json({ message: "Not Auth....Invalid or Expired Token" });
      }
    });
  }
});

// UNIVERSAL ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Export APP

module.exports = app;
