
const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer((req,res)=>{


    if(req.url === "/"){
        const filePath = path.join(__dirname, "index.html")

        fs.readFile(filePath, (err,data)=>{
            if(err){
            res.writeHead(500, { "Content-Type": "text/plain" })
            res.end("server error")
            }
            res.writeHead(200,{"Content-Type": "text/html"})
            res.end(data)

        })
    }else{
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("Page not found")
    }
})

const PORT = 7800;
server.listen(PORT,()=>{
    console.log("server listening on the port: ",PORT)
})