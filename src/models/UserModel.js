const database = require("../database/db.json");
const fs = require("fs");
const path = require("path");
const {v4:makeId} = require("uuid");
const { use } = require("express/lib/application");

const pathDataBse = path.resolve("src", "databse", "db.json");


const UserModel = {
  findOne:(userEmail)=>{

    const users = database.users;
    const userFound = users.find(user => user.email == userEmail);
    
    return userFound;
  },
  create:(user)=>{

    const newUser = {
      id:makeId(),
      name:user.name,
      email: user.email,
      password: user.hashPassword,
      isAdmin:false
    }

    database.users.push(newUser);
    const dbJSON = JSON.stringify(database);
    fs.writeFileSync(pathDataBse, dbJSON);
  }
}

module.exports = UserModel;