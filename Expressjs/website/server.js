const express = require("express")
const app = express();
const path = require("path")


app.use(express.static(path.join(__dirname, "web")));
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"web","index.html"))

})
app.get("/about",(req,res)=>{
    res.sendFile(path.join(__dirname,"web","about.html"))

})
app.get("/contact",(req,res)=>{
    res.sendFile(path.join(__dirname,"web","contact.html"))

})



app.listen(4400);