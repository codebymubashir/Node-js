const path = require('path');


//check the directory name
console.log(__dirname);

//check the file name
console.log(__filename);


const filePath = path.join("data","students","extra.txt")
console.log(filePath);


const parseData = path.parse(filePath);
const resolveData = path.resolve(filePath);
const extName = path.extname(filePath);
const baseName = path.basename(filePath);
const dirName = path.dirname(filePath);

console.log({parseData,resolveData,extName,baseName,dirName});
