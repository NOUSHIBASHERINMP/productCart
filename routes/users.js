const express = require("express");
const router = express.Router();
const { tokenVerification } = require("../middlewares/tokenHelper");
const { addUser, loginUser } = require("../controllers/users");

router.post("/signup", addUser);
router.post("/login", [tokenVerification], loginUser);
module.exports = router;
