const AdminController = require("../../controllers/AdminController.js");


const button = document.querySelector("[data-login-admin-button]");


button.addEventListener("submit", ()=>{

  if(AdminController.login == "Usuário não encontrado!"){


    console.log("Aquii")
    const span = document.querySelector(".loginErro");

    span.style.color = "red";
    span.innerHTML = AdminController.login;
  }
})