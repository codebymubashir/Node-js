import express from "express"
import { showIndiviualUser, showUsers, showAllUsersData } from "./controller/controller.js"
const app = express()

app.set("view engine", "ejs")

app.get("/users", (req, res)=>{
    showUsers(req, res)
})

app.get("/users/all", (req, res)=>{
    showAllUsersData(req, res)
})

app.get("/users/:id", (req, res)=>{
    showIndiviualUser(req, res)
})

app.listen(3000)