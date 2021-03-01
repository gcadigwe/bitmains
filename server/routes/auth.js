const express = require("express");
const router = express.Router();

const { RegisterController, LoginController } = require("../controllers/auth");

router.post("/register", RegisterController);
router.post("/login", LoginController);

module.exports = router;
