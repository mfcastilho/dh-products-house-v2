const fs = require("fs");
const path = require("path");



const requestLog = (req, res, next)=>{

  const dateHourRequest = new Date().toLocaleString("pt-BR");

  const br = ("=".repeat(94));

  const logMessage = `O Cliente ${req.ip} acessou a rota ${req.method} ${req.url} -  ${res.statusCode} em ${dateHourRequest}\n${br}\n`;


  fs.appendFileSync(path.resolve("src", "logs", "requestLog.txt"), logMessage);

  return next();
}


module.exports = requestLog;