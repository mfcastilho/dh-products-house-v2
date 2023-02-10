

const isLoginMiddleware = (req, res, next)=>{

  console.log("Entrou no middleware")
  
  if(req.session.userLogged){
    res.locals.userLogged = req.session.userLogged;

    console.log("Usuário Session:"+res.locals.userLogged)
  }


  return next();
}

module.exports = isLoginMiddleware;