const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "payback_app",
  password: "postgres1",
  port: 5432,
});

const getUsers = (request, response) => {
  console.log("getUsers route hit");
  pool.query("SELECT * FROM users ORDER BY user_id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).json(results.rows);
    console.log(results);
  });
};

const getUserName = (request, response) => {
  console.log("getUsers route hit");
  pool.query("SELECT username FROM users ORDER BY email ASC", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(201).json(results.rows);
    console.log(results);
  });
};

module.exports = {
  getUsers,
  getUserName,
  pool,
};
