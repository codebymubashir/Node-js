import express from "express";
import { MongoClient } from "mongodb";

const dbName = "college";
const dbLink = "mongodb://localhost:27017";

const client = new MongoClient(dbLink);

const app = express();

app.set("view engine", "ejs");


client.connect().then((connection)=>{
    const db = connection.db(dbName)

    app.get("/api",async(req,res)=>{
        const collection = db.collection("users");
        const students = await collection.find().toArray();
        res.send(students)
    })

})


app.listen(3300);