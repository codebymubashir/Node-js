import mongoose from "mongoose";
import express from "express";
import userModel from "../crud/model/userModel.js";

const app = express();

app.use(express.json());

await mongoose.connect("mongodb://localhost:27017/college").then(() => {
  console.log("connected");
});

app.get("/", async (req, res) => {
  const userData = await userModel.find();
  res.send(userData);
});

app.post("/create", async (req, res) => {
  const { name, email, age } = req.body;
  if (!name || !email || !age) {
    res.send({
      message: "not stored",
      success: false,
      storedInfo: null,
    });
    return false;
  }
  const usersData = await userModel.create(req.body);

  res.send({
    message: "data stored",
    success: true,
    storedInfo: usersData,
  });
});

app.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const userssData = await userModel.findByIdAndUpdate(
    id,
    { ...req.body },
    { new: true }
  );
  res.send({
    message: "data updated",
    success: true,
    info: userssData,
  });
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  console.log(id);

  const userDatas = await userModel.findByIdAndDelete(id);
  res.send({
    message: "data deleted",
    success: true,
    info: userDatas,
  });
});

app.listen(4400);