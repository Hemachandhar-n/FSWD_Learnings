const fs = require('fs');
const path=require("path")
fs.writeFileSync("welcome.txt","this is node file sysytem")
console.log("file created successfully")

fs.appendFileSync("welcome.txt","/nthis is appenend data")
console.log("data appended")

const data=fs.readFileSync("welcome.txt","utf-8")
console.log(data)

const filepath=path.join(__dirname,"welcome.txt")
console.log(filepath)
