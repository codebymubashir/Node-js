import express from "express";
import mongoose from "mongoose";
import StudentModel from "./model/studentmodel.js";
import methodOverride from 'method-override'

const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));


await mongoose.connect("mongodb://localhost:27017/School");
console.log("MongoDB connected");

app.get("/", (req, res) => {
  res.render("form");
});

app.post("/add-student", async (req, res) => {
  const student = await StudentModel.create(req.body);
  console.log(student);
  res.redirect("/students"); 
});


app.get("/students", async (req, res) => {
  const users = await StudentModel.find();
  res.render("data", { users });
});


app.get("/update/student/:id", async (req, res) => {
  const student = await StudentModel.findById(req.params.id);
  res.render("edit", { student });
});


app.post("/update/student/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);
  await StudentModel.findByIdAndUpdate(id, { ...req.body }, { new: true });
  res.redirect("/students"); 
});

app.delete("/delete/student/:id",async(req,res)=>{
    const id = req.params.id
    console.log(id);

    await StudentModel.findByIdAndDelete(req.params.id)
    res.redirect("/students")
    
})


app.listen(3322);