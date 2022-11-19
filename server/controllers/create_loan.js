const { pool } = require("../database/queries");

const createLoanControl = (req, res) => {
  const {
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
    `INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description, payment_date, transaction_rating)
   VALUES (DEFAULT, '${lender})', '${borrower}', '${status}', '${creation_date}', '${due_date}', ${amount},
   '${description}', '${payment_date}', ${transaction_rating}) RETURNING *;`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });

      res.status(201).json(results.rows[0]);
    }
  );
};

module.exports = { createLoanControl };
