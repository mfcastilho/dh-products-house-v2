const LoginController = {
  showLogin:(req, res)=>{
    return res.render("auth/login.ejs");
  }
}

module.exports = LoginController;