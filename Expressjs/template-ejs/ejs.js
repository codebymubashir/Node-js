import express from 'express'

const app = express()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("html")
    
})


app.listen(3300)