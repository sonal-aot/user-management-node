const express = require("express");
const router = express.Router();
const {
  loadPage,
  signUp,
  login,
  logout,
  loadLoginPage,
  loadSignUpPage,
} = require("./functions");

router.get("/", loadPage);
router.get("/register", loadSignUpPage);
router.post("/register", signUp);
router.get("/login", loadLoginPage);
router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
