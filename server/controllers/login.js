const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../database/queries");

const loginControl = (req, res) => {
  const { username, password } = req.body;
  if (username.trim() === "" || password.trim() === "")
    return res.status(422).json({ message: "All fields are required" });

  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });

      if (results.rows.length <= 0)
        return res.status(404).json({ message: "User not registered" });

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
};

module.exports = { loginControl };
