const express = require("express");
const router = express.Router();

const { UserController } = require("../controllers/index");

router.post("/user",UserController.CreateUser);

module.exports = router;
