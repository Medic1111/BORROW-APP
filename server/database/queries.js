const Pool = require('pg').Pool
const pool = new Pool({
    user: 'payback_appuser',
    host: 'localhost',
    database: 'payback_app',
    password: 'password',
    port: 5432,
})
const getUsers = (request, response) => {
    console.log("getUsers route hit")
    pool.query('SELECT * FROM users ORDER BY user_id ASC', (error, results) => {
      if (error) {
        throw error
      }
      response.status(201).json(results.rows)
      console.log(results)
    })
}

module.exports = {
    getUsers
}