const express = require("express");
const router = express.Router();

const ProductController = require("../controllers/ProductController");

router.get("/produtos/:id", ProductController.showProduct);

// router.get("/produto/:id", ProductController.showProduct);

module.exports = router;