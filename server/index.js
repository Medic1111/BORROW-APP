const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const app = express();
const { pool } = require("./database/queries");

// MIDDLEWARES
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, "../client/build")));

// ROUTES
const validate = require("./routes/validate");
const loginRoute = require("./routes/login");
const registerRoute = require("./routes/register");
const searchRoute = require("./routes/search");

// PERSONAL MIDDLEWARES
app.use("/", validate);
app.use("/", loginRoute);
app.use("/", registerRoute);
app.use("/", searchRoute);

// DEV ROUTE

app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Hello from API" });
});

// create new loan
app.post("/api/v1/loan", (req, res) => {
  pool.query(
    `INSERT INTO loans (loan_id, lender, borrower, status, creation_date, due_date, amount, description, payment_date, transaction_rating)
   VALUES (DEFAULT, '${req.body.lender})', '${req.body.borrower}', '${req.body.status}', '${req.body.creation_date}', '${req.body.due_date}', ${req.body.amount},
   '${req.body.description}', '${req.body.payment_date}', ${req.body.transaction_rating}) RETURNING *;`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });

      res.status(201).json({
        loan: results.rows[0],
      });
    }
  );
});

// update loan
app.put("/api/v1/loan", (req, res) => {
  pool.query(
    `UPDATE loans SET loan_id = ${req.body.loan_id}, lender = '${req.body.lender}', borrower = '${req.body.borrower}', status = '${req.body.status}', 
  creation_date = '${req.body.creation_date}', due_date = '${req.body.due_date}', amount = ${req.body.amount}, description = '${req.body.description}', 
  payment_date = '${req.body.payment_date}', transaction_rating = '${req.body.transaction_rating}' WHERE loan_id = ${req.body.loan_id} RETURNING *;`,
    (error, results) => {
      if (error)
        return res.status(500).json({ message: "Oops, something went wrong" });

      res.status(200).json({
        loan: results.rows[0],
      });
    }
  );
});

// UNIVERSAL ROUTE

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

// Export APP

module.exports = app;
