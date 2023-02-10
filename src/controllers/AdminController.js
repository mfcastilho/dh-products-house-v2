const dataBase = require("../database/db.json");
const fs = require("fs");
const path = require("path");
const {validationResult} = require("express-validator");

const productsModel = require("../models/productsModel.js")

const {v4:makeId} = require("uuid");

const AdminController = {
  showLogin: (req, res)=>{
    return res.render("admin/auth/login-admin.ejs");
  },
  showHome: (req, res)=>{

    const products = productsModel.findAll();

    return res.render("admin/home-admin.ejs", {products});
  },
  showDashboard: (req, res)=>{
    return res.render("admin/dashboard.ejs");
  },
  showCadastroProdutos: (req, res)=>{
    return res.render("admin/products/cadastro-produto.ejs");
  },
  showEditarProdutos: (req, res)=>{

    const {id} = req.params;

    const db = dataBase.products;

    const productFound = db.find(product=>product.id === id);

    return res.render("admin/products/editar-produto.ejs",{product:productFound});
  },
  login: (req, res)=>{

    let resultValidation = validationResult(req);

    if(resultValidation.errors.length > 0){
      return res.render("admin/auth/login-admin.ejs", {errors:resultValidation.mapped(), old:req.body});
    }
    const users = dataBase.users;

    // console.log(req.body);
    const {email, password} = req.body;


    if(req.body.login_admin){
      res.cookie("adminEmail", req.body.login_admin, {maxAge:(1000 * 60) * 30});
    }

    const userFound = users.find(user=> user.email === email);
    console.log(userFound)

    if(!userFound){

      const msg = "Usuário não encontrado!";
      console.log(msg);
      return msg;
    }

    // const isValidPassword = userFound.password === password;

    // if(!isValidPassword){
    //   console.log("Email ou senha inválida!");
    //   return;
    // }

    // if(!userFound.isAdmin){
    //   return res.redirect("/");
    // }
    
    
    req.session.userLogged = userFound;
    
    return res.redirect("/admin/home");
    
  },
  storeProduct:(req, res)=>{

    console.log(req.file);

    
     const {name, price, active, stock, description} = req.body; 

     console.log(req.file.filename);
     
     const image = `/images/${req.file.filename}`;
    

     console.log(price);
     const newProduct = {
       id:makeId(),
       name,
       price: `R$ ${price}`,
       image,
       active,
       stock,
       description
     }

      console.log(newProduct)
      productsModel.create(newProduct);


     return res.redirect("/admin/home");
  },
  updateProduct: (req, res)=>{
    const {name, price, image, active, stock, description} = req.body; 
    const {id} = req.params;


    const indexProduct = dataBase.products.findIndex(product=>product.id === id);

    const updateProduct = {
      id,
      name,
      price:`R$ ${price.replace(".", ",")}`,
      image,
      active,
      stock,
      description
    }

    dataBase.products.splice(indexProduct, 1, updateProduct);

    

    const db = JSON.stringify(dataBase);
    fs.writeFileSync(path.resolve("src", "database", "db.json"), db);

    return res.redirect("/admin/home");
  },
  deleteProduct: (req, res)=>{
    const {id} = req.params;
    const products = dataBase.products;

    const indexProduct = products.findIndex(product=> product.id === id);


    dataBase.products.splice(indexProduct, 1);
    const db = JSON.stringify(dataBase);
    fs.writeFileSync(path.resolve("src", "database", "db.json"), db);

    return res.redirect("/admin/home");
  }
}


module.exports = AdminController;