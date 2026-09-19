const fs = require("fs")

console.log("hello world");

//  custom module 
// built in module

const data = require("./file2")

console.log(data.add(3,5));
console.log(data.multiply(3,5));

//
fs.writeFileSync("data.txt","thi sis the first file using fs")

// 
let d =fs.readFileSync("data.txt","utf8")
console.log(d);





// asyncgronuus

 fs.readFile("data.txt","utf8", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
})

 fs.appendFile("data.txt","qwertyuiopxcvbnm", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
})

// delete

 fs.unlink("data.txt", (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(data);
})