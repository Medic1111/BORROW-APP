const router = require("express").Router();
const { updateLoanControl } = require("../controllers/update_loan");

const updateLoanRoute = router.put("/api/v1/loan", updateLoanControl);

module.exports = updateLoanRoute;
