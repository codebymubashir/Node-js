import express from "express";
import { MongoClient } from "mongodb";
import multer from "multer";
const upload = multer({ dest: "uploads/public" });

const app = express();

const dbName = "users";
const url = "mongodb://localhost:27017";

app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads/public"));

app.set("view engine", "ejs");
const client = new MongoClient(url);
let db;

client.connect().then((connection) => {
  db = connection.db(dbName);

  app.get("/", (req, res) => {
    res.render("form");
  });

  app.post("/data", upload.any(), async (req, res) => {
  try {
    console.log(req.files);

    const image = req.files.find((f) => f.fieldname === "image");
    const file = req.files.find((f) => f.fieldname === "file");
    const collection = db.collection("users");
    await collection.insertOne({
      ...req.body,
      image: image ? `/uploads/${image.filename}` : null,
      file: file ? `/uploads/${file.filename}` : null,
    });

  
    res.redirect("/form-data")
  } catch (err) {
    console.log(err);
    res.status(500).send("Something went wrong");
  }
});

app.get("/form-data", async (req, res) => {
  const collection = db.collection("users");  
  const users = await collection.find().toArray();
  res.render("data", { users });                   
});
});
app.listen(3300);
