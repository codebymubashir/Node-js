const http = require("http")
const fs = require("fs");

const server = http.createServer((req, res)=>{
    fs.readFile("html/form.html","utf-8",(err,data)=>{
     if (err) {
        res.statusCode = 500
        res.setHeader("Content-Type", "text/plain")
        res.end("internel server error")
        return
     }
  
    if(req.url === "/"){
        res.write(data)
        res.end()
    }

    else if(req.url === "/submit"){
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end()
    }

    else{
        res.statusCode = 404
        res.setHeader("Content-Type", "text/plain")
        res.end()
    }
})
  })
const PORT = 4500
server.listen(PORT, ()=>{
    console.log("Server listening at Port", PORT)
})

