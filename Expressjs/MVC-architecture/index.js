import express from 'express'
import { handleController } from './controller/useController.js';
const app = express();

app.set("view engine","ejs")
app.get("/user",handleController)
app.listen(3400)