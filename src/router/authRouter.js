const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/AuthController.js");
const isLoginMiddleware = require("../middlewares/isLoginMiddleware");



router.get("/cadastro", AuthController.showCadastro);
router.post("/cadastro", AuthController.store);

router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login)

router.use(isLoginMiddleware);

module.exports = router;
