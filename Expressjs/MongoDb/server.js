import express from "express";
import { MongoClient } from "mongodb";

const dbName = "college";
const dbLink = "mongodb://localhost:27017";

const client = new MongoClient(dbLink);

const app = express();

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  try {
    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection("users");

    const result = await collection.find().toArray();

    res.render("index", { users: result });
  } catch (error) {
    console.log(error);
  }
});

app.listen(3300);
