

const isLoginMiddleware = (req, res, next)=>{

  
  if(req.session.userLogged){
    res.locals.userLogged = req.session.userLogged;

    console.log("Usuário Session:"+res.locals.userLogged.name)
  }


  return next();
}

module.exports = isLoginMiddleware;