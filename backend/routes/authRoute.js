const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");

const router = express.Router();

router.post("/register", registerUser); 
router.post("/logIn", loginUser)
module.exports = router;