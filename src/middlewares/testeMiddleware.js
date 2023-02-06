const testeMiddleware = (req, res, next)=>{
  console.log("Estou vendo o que vc está solicitando");

  return next();
}

module.exports = testeMiddleware;