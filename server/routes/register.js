const router = require("express").Router();
const { registerControl } = require("../controllers/register");

const registerRoute = router.post("/api/v1/register", registerControl);

module.exports = registerRoute;
