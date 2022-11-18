const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { pool } = require("../database/queries");

async function selectFrom(data, table, condition) {
  try {
    return await pool.query(`SELECT ${data} FROM ${table} ${condition}`);
  } catch (err) {
    return err.stack;
  }
}

async function getUserByUsername(username) {
  return await selectFrom("*", "users", `WHERE username = '${username}'`);
}

async function getLoansByUsername(username) {
  return await selectFrom(
    "*",
    "loans",
    `WHERE lender = '${username}' OR borrower = '${username}'`
  );
}

const loginControl = async (req, res) => {
  const { username, password } = req.body;

  if (username.trim() === "" || password.trim() === "")
    return res.status(422).json({ message: "All fields are required" });

  let results = await getUserByUsername(username);
  const user = results.rows[0];

  if (!user) return res.status(404).json({ message: "User not registered" });

  results = await getLoansByUsername(user.username);

  const loans = results.rows;

  bcrypt.compare(password, user.password, (err, match) => {
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

    return res.status(200).json({
      user: user.username,
      token,
      loans: loans || [],
    });
  });
};

module.exports = { loginControl };
