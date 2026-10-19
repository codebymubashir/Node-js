const express = require("express")
const app = express();
const path = require("path")

app.get("/",(req,resp)=>{
    resp.sendFile(path.join(__dirname,"web.html"))

})



app.listen(4400);