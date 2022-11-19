const { pool } = require("../database/queries");

const updateLoanControl = (req, res) => {
  const {
    loan_id,
    lender,
    borrower,
    status,
    creation_date,
    due_date,
    amount,
    description,
    payment_date,
    transaction_rating,
  } = req.body;

  pool.query(
    `UPDATE loans SET loan_id = ${loan_id}, lender = '${lender}', borrower = '${borrower}', status = '${status}', 
  creation_date = '${creation_date}', due_date = '${due_date}', amount = ${amount}, description = '${description}', 
  payment_date = '${payment_date}', transaction_rating = '${transaction_rating}' WHERE loan_id = ${loan_id} RETURNING *;`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "No entry found with that ID" });

      res.status(200).json(results.rows[0]);
    }
  );
};

module.exports = { updateLoanControl };
