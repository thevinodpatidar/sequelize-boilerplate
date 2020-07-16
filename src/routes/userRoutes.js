const express = require("express");
const router = express.Router();

const UserController = require("../controllers/index").UserController;

router.post("/user",UserController.CreateUser);
router.get("/user",UserController.GetUsers);

module.exports = router;
