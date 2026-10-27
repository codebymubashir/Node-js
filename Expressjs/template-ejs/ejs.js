import express from 'express'

const app = express()
app.use(express.urlencoded({extended: false}))
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("addUser")
    
})
app.post("/submit",(req,res)=>{
    console.log(req.body);
    
    res.render("submitUser",req.body)
    
})


app.listen(3300)