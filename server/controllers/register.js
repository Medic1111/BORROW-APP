const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../database/queries");

const registerControl = (req, res) => {
  const { email, username, password } = req.body;

  if (email.trim() === "" || username.trim() === "" || password.trim() === "")
    return res.status(422).json({ message: "All fields are required" });

  if (password.length <= 5)
    return res
      .status(400)
      .json({ message: "Password must contain at least 6 characters" });

  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });
      if (results.rows.length > 0)
        return res
          .status(409)
          .json({ message: "Username or Email already registered" });

      const hash = bcrypt.hashSync(password, 10);
      pool.query(
        `INSERT INTO users (username, password, email) VALUES ('${username}', '${hash}', '${email}') RETURNING * ;`,
        (error, results) => {
          if (error)
            return res
              .status(500)
              .json({ message: "Oops, something went wrong here" });

          let token;
          token = jwt.sign({ username }, `${process.env.TOKEN_SECRET}`, {
            expiresIn: "600s",
          });

          res.status(201).json({
            user: results.rows[0].username,
            token,
          });
        }
      );
    }
  );
};

module.exports = { registerControl };
