const router = require("express").Router();
const { searchControl } = require("../controllers/search");
const searchRoute = router.get("/api/v1/search/:user", searchControl);

module.exports = searchRoute;
