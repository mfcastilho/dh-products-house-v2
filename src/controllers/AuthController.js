const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");

const AuthController = {
  showCadastro: (req, res)=>{
    return res.render("auth/cadastro.ejs");
  },
  showLogin: (req, res)=>{
    return res.render("auth/login.ejs");
  },
  store:(req, res)=>{
    const {name, email, password} = req.body;

    console.log(req.body);
    if(!name){
      return res.send("Veio vazio");
    }
    console.log(name)
    const userExist = UserModel.findOne(email);

    if(userExist){
      return res.render("auth/cadastro.ejs", { error:"Email já cadastrado"});
    }

    const hashPassword = bcrypt.hashSync(password, 10);
    const newUser = {name, email, hashPassword};
    console.log(newUser);
    UserModel.create(newUser);

    return res.redirect("/login");

  },
  login:(req, res)=>{

    const {email, password} = req.body;

    const userFound = UserModel.findOne(email);

    if(!userFound){
      
      res.render("auth/login.ejs", {
        errors:{
          email:{
            msg:"Usuário não encontrado"
          }
        }
      })
    }

    console.log(userFound.password);
    const checkPasword = bcrypt.compareSync(password, userFound.password);

    
   

   
  }
}

module.exports = AuthController;