const dataBase = require("../database/db.json");
const fs = require("fs");
const path = require("path");
const pathDb = path.resolve("src","database","db.json")


const productsModel = {

  findAll: ()=>{
    return dataBase.products;
  },

  findByPk:(id)=>{
    
  },

  create: product=>{
    dataBase.products.push(product);

    const db = JSON.stringify(dataBase); 

    fs.writeFileSync(pathDb, db);
  },
  update: (id, product)=>{

  },
  delete: (id)=>{

  }
  
}

module.exports = productsModel;