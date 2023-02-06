
const RegistrationController = {
  showRegistration:(req, res)=>{
    return res.render("auth/cadastro.ejs");
  }
}

module.exports = RegistrationController;