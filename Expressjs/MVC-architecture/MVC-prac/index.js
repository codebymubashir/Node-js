import express from "express"
import { useController } from "./controller/useController.js"

const app = express()

app.set("view engine", "ejs")

app.get("/", useController)

app.listen(3800)