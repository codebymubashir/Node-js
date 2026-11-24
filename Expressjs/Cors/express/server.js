import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.get("/",(req,res)=>{
    res.send({
        namme:"ali",
        email:"ali@gmail.com",
        age:22
    })
})

app.listen(3200)