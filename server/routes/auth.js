const express = require("express");
const router = express.Router();

const { RegisterController } = require("../controllers/auth");

router.post("/register", RegisterController);

module.exports = router;
