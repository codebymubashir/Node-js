import express from "express";
import morgan from "morgan";
const app = express()

app.use(morgan('dev'))
app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/users", (req, res) => {
    res.send("users page")
})

app.get("/wait",(req,res)=>{
    
})

app.listen(8800);