/*

  O Express fornece um middleware para lidar com os dados (objetos) (recebidos) no corpo da solicitação.

  uma. express.json()é um método embutido no express para reconhecer o objeto de solicitação de entrada como um objeto JSON . Este método é chamado como um middleware em seu aplicativo usando o código:app.use(express.json());

  b. express.urlencoded()é um método embutido no express para reconhecer o objeto de solicitação de entrada como strings ou arrays . Este método é chamado como um middleware em seu aplicativo usando o código:app.use(express.urlencoded());

  ALTERNATIVAMENTE, recomendo usar o body-parser (é um pacote NPM) para fazer a mesma coisa. Ele foi desenvolvido pelos mesmos criadores do Express e foi projetado para trabalhar com o Express. body-parser costumava fazer parte do express. Pense no analisador de corpo especificamente para solicitações POST (ou seja, o objeto de solicitação .post) e/ou solicitações PUT (ou seja, o objeto de solicitação .put).

*/



//===importações===
const express = require("express");
const methodOverride = require("method-override");
const cookies = require("cookie-parser");


// const multer = require("multer");

const userRouter = require("./router/userRouter.js");
const homeRouter = require("./router/homeRouter.js");
const productRouter = require("./router/productRouter.js");
// const registratioRouter = require("./router/registrationRouter.js");
// const loginRouter = require("./router/loginRouter.js");
const authRouter = require("./router/authRouter.js");
const adminRouter = require("./router/adminRouter.js");
// const testeMiddleware = require("./middlewares/testeMiddleware.js");
const path = require("path");
const requestLog =  require("./middlewares/requestLog.js");


//===variáveis===
const server = express();
const port = 4000;



//===middlewares===

//Obs:Middlewares globais ficam antes das rotas

//Mostrando para o express que iremos usar uma
//template engine e especificando que iremos usar o ejs
server.set("view engine", "ejs");

//Setando para o express o caminho da pasta views
server.set("views", path.resolve("src", "views"));

server.use(cookies());

server.use(express.json());
server.use(express.urlencoded({ extended: false}));

//bibilioteca usada para sobrescrever uma função http
server.use(methodOverride("_method"));

//Mostrando que a pasta estática será a public
server.use(express.static(path.resolve("src", "public")));



// server.use(testeMiddleware);
server.use(requestLog);




//rotas
server.use(productRouter);
server.use(userRouter);
server.use(homeRouter);
// server.use(registratioRouter);
// server.use(loginRouter);
server.use(authRouter);
server.use(adminRouter);


server.use((req, res, next)=>{
  return res.status(404).render('not-found.ejs');
});



//levantando o servidor
server.listen(port, () =>
  console.log(`Servidor rodando no http://localhost:${port}`)
);
