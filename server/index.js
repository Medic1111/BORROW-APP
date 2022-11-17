const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const db = require("./database/queries");
const {pool} = require("./database/queries");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// DEV ROUTE

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello from API" });
});

app.get("/api/v1/users", db.getUsers);
// UNIVERSAL ROUTE

app.get("/api/v1/testing/db", () => {
  pool.query("SELECT * FROM users ORDER BY user_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    console.log(results);
  });
});

app.post("/api/v1/register", (req, res) => {
  console.log(req.body);
  const { email, username, password } = req.body;
  console.log(username);

  if (email.trim() === "" || username.trim() === "" || password.trim() === "") {
    return res.status(422).json({ message: "All fields are required" });
  } else if (password.length <= 5) {
    return res
      .status(400)
      .json({ message: "Password must contain at least 6 characters" });
  }

  // FIND THAT USER
  let user = {}
  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`, (error, results) => {
      if (error) {
        throw error;
      }
      console.log(results);
      user = results.rows; 
      return res
        .status(200)
        .json(user)
    }
  )
  console.log(user);
 
  // pool.query(
  //   `SELECT * FROM users WHERE username = ${username} OR email = ${email}`,
  //   (error, results) => {
  //     console.log(results);
  //     if (error) {
  //       console.log(error);
  //       return res.json({ message: "Not found" });
  //     }
      // if (results.length > 0) {
      //   console.log("user found");
      // } else {
      //   console.log("user not found");
      // }
  pool.query(
    `INSERT INTO users (username, password, email) VALUES ('${username}', '${password}', '${email}')`,
    (error, results) => {
      console.log(results);
      if (error) {
        console.log(error);
        return res.json({ message: "Not found" });
      }
    }
  );
  });
  // Example.findOne(
  //   { $or: [{ username: username }, { email: email }] },
  //   (err, doc) => {
  //     db.findUser(username);

  //     if (err) {
  //       return res.status(500).json({ message: "Oops, something went wrong" });
  //     }

  //     if (doc) {
  //       return res
  //         .status(409)
  //         .json({ message: "Username or Email already registered" });
  //     }

  //     const hash = bcrypt.hashSync(password, 10);
  //     const newUser = new Example({
  //       email,
  //       username,
  //       password: hash,
  //     });

  //     newUser.save((err, doc) => {
  //       if (err) {
  //         return res
  //           .status(500)
  //           .json({ message: "Oops, something went wrong, please try again." });
  //       }

  //       let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
  //         expiresIn: "600s",
  //       });

  //       res.status(201).json({
  //         username: doc.username,
  //         token,
  //       });
  //     });
  //   }
  // );
// });

app.post("/api/v1/login", (req, res) => {
  const { email, username, password } = req.body.user;
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
      // Example.findOne({ username: username }, (err, doc) => {
      //   if (err) {
      //     return res
      //       .status(500)
      //       .json({ message: "Oops, something went wrong, try again." });
      //   }

      //   if (!doc) {
      //     return res.status(404).json({ message: "Username not registered" });
      //   }

      //   bcrypt.compare(password, doc.password, (err, match) => {
      //     if (err) {
      //       return res
      //         .status(500)
      //         .json({ message: "Oops, something went wrong with your request" });
      //     }
      //     if (!match) {
      //       return res.status(403).json({ message: "Incorrect password" });
      //     }

      //     let token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
      //       expiresIn: "600s",
      //     });

      //     res.status(201).json({
      //       username: doc.username,
      //       token,
      //     });
      //   });
    }
  );
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres API" });
});

// Export APP

module.exports = app;
