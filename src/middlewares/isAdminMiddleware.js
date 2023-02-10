

const isAdminMiddleware = (req, res, next)=>{

  console.log("Entrou no middleware")
  const { userLogged } = req.session;

  console.log("Usuário da session:"+userLogged)

  if(!userLogged || !userLogged.isAdmin){

    res.redirect("/");
  }

  next();

}

module.exports = isAdminMiddleware;