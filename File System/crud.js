//file system crud

const fs = require("fs");

//create a file using filesystem
let createFile = fs.writeFileSync("data.txt","this is my first file");
console.log(createFile)

//read a file using filesystem
const readFile = fs.readFileSync("data.txt","utf8");
console.log(readFile)

//update a file using file system
const updateFile = fs.appendFileSync("data.txt","this is my update file");
console.log(updateFile)

//delete a file using filesystem
fs.unlinkSync("data.txt")



//terminal crud
//create a file using terminal
const operation = process.argv[2];

//create a file using terminal
if(operation === "write"){
    const name = process.argv[3]
    const content = process.argv[4]
    fs.writeFileSync(`${name}.txt`, content);
    console.log("File created")

}else if(operation === "read"){
    const name = process.argv[3]
    const data = fs.readFileSync(`${name}.txt`, "utf-8");
    console.log(data)
}else if(operation === "update"){
    const name = process.argv[3]
    const content = process.argv[4]
    fs.appendFileSync(`${name}.txt`,content)
}else if(operation === "delete"){
    const name = process.argv[3];
    fs.unlinkSync(`${name}.txt`)
}else{
    console.log("operation not found")
}