const router = require("express").Router();
const { createLoanControl } = require("../controllers/create_loan");

const createLoanRoute = router.post("/api/v1/loan", createLoanControl);

module.exports = createLoanRoute;
