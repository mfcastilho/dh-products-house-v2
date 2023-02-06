const {check} = require("express-validator");

const validationAdminLoginMiddleware = [
  check("email").notEmpty().withMessage("O campo email não pode ficar vazio").bail()
    .isEmail().withMessage("Digite um formato de email correto"),
  check("password").notEmpty().withMessage("O campo de senha não pode ficar vazio").bail()
    .isLength({min:6}).withMessage("A senha precisa ter no mínimo 6 caracteres")
];

module.exports = validationAdminLoginMiddleware;