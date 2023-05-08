const express = require("express");
const users = require("../Controllers/userControllers")
const router = express().Router;

router.post("/user/register", users.user)

module.exports = router;