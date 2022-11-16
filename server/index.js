const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();
const app = express();

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// DEV ROUTE

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello from API" });
});

// UNIVERSAL ROUTE

app.post("/api/v1/register", (req, res) => {
  const { email, username, password } = req.body.user;

  if (email.trim() === "" || username.trim() === "" || password.trim() === "") {
    return res.status(422).json({ message: "All fields are required" });
  } else if (password.length <= 5) {
    return res
      .status(400)
      .json({ message: "Password must contain at least 6 characters" });
  }

  Example.findOne(
    { $or: [{ username: username }, { email: email }] },
    (err, doc) => {
      if (err) {
        return res.status(500).json({ message: "Oops, something went wrong" });
      }

      if (doc) {
        return res
          .status(409)
          .json({ message: "Username or Email already registered" });
      }

      const hash = bcrypt.hashSync(password, 10);
      const newUser = new Example({
        email,
        username,
        password: hash,
      });

      newUser.save((err, doc) => {
        if (err) {
          return res
            .status(500)
            .json({ message: "Oops, something went wrong, please try again." });
        }

        let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
          expiresIn: "600s",
        });

        res.status(201).json({
          username: doc.username,
          token,
        });
      });
    }
  );
});

app.post("/api/v1/login", (req, res) => {
  const { email, username, password } = req.body.user;
  if (username.trim() === "" || password.trim() === "") {
    return res.status(422).json({ message: "All fields are required" });
  } else if (password.length <= 5) {
    return res
      .status(400)
      .json({ message: "Password must contain at least 6 characters" });
  }

  Example.findOne({ username: username }, (err, doc) => {
    if (err) {
      return res
        .status(500)
        .json({ message: "Oops, something went wrong, try again." });
    }

    if (!doc) {
      return res.status(404).json({ message: "Username not registered" });
    }

    bcrypt.compare(password, doc.password, (err, match) => {
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
        username: doc.username,
        token,
      });
    });
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Export APP

module.exports = app;
