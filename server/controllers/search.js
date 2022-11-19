const { pool } = require("../database/queries");

const searchControl = (req, res) => {
  const username = req.params.user;

  pool.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });

      if (results.rows.length <= 0)
        return res.status(404).json({ message: "User not registered" });

      results.rows[0].password = "secret";
      res.status(200).json(results.rows[0]);
    }
  );
};

module.exports = { searchControl };
