const express = require("express");
const router = express.Router();

const RegistrationController = require("../controllers/RegistrationController.js");


router.get("/cadastro", RegistrationController.showRegistration)

module.exports = router;