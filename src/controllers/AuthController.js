const AuthController = {
  showCadastro: (req, res)=>{
    return res.render("auth/cadastro.ejs");
  },
  showLogin: (req, res)=>{
    return res.render("auth/login.ejs");
  }
}

module.exports = AuthController;