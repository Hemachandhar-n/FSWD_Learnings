const fs = require("fs");
const path = require ("path")
const os = require('os')

fs.writeFileSync('message.txt','hello world the is john Doe if you find ths  you successfully created the file')
console.log('file created successfully') //-> this is write file sync function for the creating the txt and also add the file message in the file.

fs.appendFileSync('message.txt', '\n if you read this line you successfully append the file')
console.log('append successfully') //-> this program of line can be used to add the extra line or breif in the file system.

const data = fs.readFileSync('message.txt','utf-8')
console.log('File contant : \n ',data) // this function can be used to read the txt file inside the lines.

const filepath = path.join(__dirname,'message.txt')
console.log('File Path : \n',filepath) // this one used to find the exact path of the file by using the join function.

//5.OS iNFO
console.log('\n ---OS INFO---');
console.log('plarform : ', os.platform());
console.log('CPU ARCHITECTURE : ',os.arch())
console.log('CPU CORES', os.cpus().length)
console.log('TOTAL MEMORY (GB): ',(os.totalmem()/(1024**3)).toFixed(2));