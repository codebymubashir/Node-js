import express from 'express'
import mongoose from 'mongoose'
import StudentModel from './model/studentmodel.js'
const app = express()
app.set("view engine","ejs")
app.use(express.urlencoded({extended:true}))

await mongoose.connect("mongodb://localhost:27017/School");
console.log("MongoDB connected");

app.get("/",(req,res)=>{
    res.render("form")
})

app.post("/add-student",async(req,res)=>{
    const students = await StudentModel.create(req.body)
    console.log(students);

    const users = await StudentModel.find();
    res.render("data",{users})
    
})

app.listen(3322)