const dataBase = require("../database/db.json");

const productsModel = require("../models/productsModel.js")

const HomeController = {
  showHome: (req, res)=>{
    const products = productsModel.findAll();
    return res.render("home.ejs", {
      products: products
    });
  }
}


module.exports = HomeController;