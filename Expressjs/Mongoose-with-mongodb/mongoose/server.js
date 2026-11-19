import mongoose from "mongoose";
import express from 'express'
import userModel from "./model/userModel.js";
const app = express()
app.set("view engine", "ejs")

await mongoose.connect("mongodb://localhost:27017/college").then(()=>{
    console.log("connected")
})

app.get("/", async(req, res)=>{

    const result = await userModel.find()
    console.log(result)
    res.render("users", {users: result})
})
app.listen(5500)