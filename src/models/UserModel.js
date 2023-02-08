const database = require("../database/db.json");
const fs = require("fs");
const path = require("path");
const {v4:makeId} = require("uuid");


const pathDataBase = path.resolve("src", "database", "db.json");


const UserModel = {
  findOne:(userEmail)=>{

    const users = database.users;
    const userFound = users.find(user => user.email == userEmail);

    console.log("Found? "+userFound)
    
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
    fs.writeFileSync(pathDataBase, dbJSON);
  }
}

module.exports = UserModel;