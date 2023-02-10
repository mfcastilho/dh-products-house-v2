const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController.js");

const isLoginMiddleware = require("../middlewares/isLoginMiddleware");
const isAdminMiddleware = require("../middlewares/isAdminMiddleware");

// router.use(isLoginMiddleware);
// router.use(isAdminMiddleware);


router.get("/cadastro", AuthController.showCadastro);
router.post("/cadastro", AuthController.store);

router.get("/login", AuthController.showLogin);
router.post("/login", AuthController.login)


module.exports = router;
