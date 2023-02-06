const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController.js");

router.get("/cadastro", AuthController.showCadastro)

router.get("/login", AuthController.showLogin);


module.exports = router;
