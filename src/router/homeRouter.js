const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController.js")


router.get("/home", HomeController.showHome);
router.get("/", HomeController.showHome);


// router.get("/produtos/:id", HomeController.showHome);




module.exports = router;