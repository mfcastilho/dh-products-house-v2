
const ProductController = {
  // showProducts:(req, res)=>{
  //   return res.render("produto.ejs");
  // },

  showProduct:(req, res)=>{

    const {id} = req.params;

    let produto = ""; 

    const db = require("../database/db.json");

    db.products.forEach(product=>{

      if(product.id == id){
        
       return produto = product;
      }

    });
    
    console.log(produto);
    return res.render("produto.ejs",{
      product: produto
    });
    
  }
}

module.exports = ProductController;