const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { restart } = require("nodemon");
const { render } = require("..");
const { pool } = require("../database/queries");


async function selectFrom(data, table, condition) {
  try {
    return await pool.query(`SELECT ${data} FROM ${table} ${condition}`)
  } catch (err) {
    return err.stack;
  }
}

async function getUserByUsername(username){
  return await selectFrom('*', 'users',`WHERE username = '${username}'`)
}

async function getLoansByUserId(userId){
  return await selectFrom('*','loans',`WHERE lender_id = '${userId}' OR borrower_id = '${userId}'`);
}


const loginControl = async (req, res) => {  
  const { username, password } = req.body;  
  let results = await getUserByUsername(username);
  const user = results.rows[0]
  console.log(user);
  results = await getLoansByUserId(user.user_id);
  const loans = results.rows;
  console.log(loans);

  if (username.trim() === "" || password.trim() === "")
    return res.status(422).json({ message: "All fields are required" });

  // pool.query(
  //   `SELECT * FROM users WHERE username = '${username}'`,
  //   (error, results) => {
  //     if (error)
  //       return res.status(500).json({ message: "Oops, something went wrong" });

  //     if (results.rows.length <= 0)
  //       return res.status(404).json({ message: "User not registered" });

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

        return res.status(201).json({
          user,
          token,
          loans,
        });
      });

  // console.log(user.user_id);
  // pool.query(`SELECT * FROM loans WHERE lender_id = '${user.user_id}' OR borrower_id = '${borrower_id}';`, (error, results) => {
  //   console.log(results);
  //   res.send(results);
    };


module.exports = { loginControl };
