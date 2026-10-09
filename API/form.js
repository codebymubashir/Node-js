const http = require("http")
const fs = require("fs");
const querystring = require("querystring")

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
        let formData=[]
        req.on("data",(chunk)=>{
         formData.push(chunk)
        })
        req.on("end",()=>{
         let addFormData= Buffer.concat(formData).toString()
         let readDate=querystring.parse(addFormData)
         console.log(readDate);
         
        })
        res.end()
    }

    else{
        res.statusCode = 404
        res.setHeader("Content-Type", "text/plain")
        res.end()
    }
})
  })
const PORT = 5500
server.listen(PORT, ()=>{
    console.log("Server listening at Port", PORT)
})

