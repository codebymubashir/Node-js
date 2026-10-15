const http = require("http");
const fs = require("fs")

let server = http.createServer((req,res)=>{

    let fullData = fs.readFileSync("html/web.html","utf8")
    if(req.url === "/web.css"){
        fs.readFile("html/web.css","utf8",(err,data)=>{
            if (err) {
                res.writeHead(500,{"Content-Type":"text/plain"});
                res.end("css not found");
                return;
            } else {
                res.writeHead(200,{"Content-Type":"text/css"});
                res.end(data);
                
            }
        })
        
    }else{
        let file = req.url === "/" ? "/web": req.url;
        fs.readFile("html"+file+".html","utf8",(err,data)=>{
            if (err) {
                res.writeHead(400,{"Content-Type":"text/plain"});
                res.end("page not found");
                return;
                
            } else {
                res.writeHead(200,{"Content-Type":"text/html"});
                res.end(data)
                
            }

        })
    }

})

let PORT = 4800;
server.listen(PORT)

