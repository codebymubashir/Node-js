import express from "express";
import { MongoClient } from "mongodb";

const dbName = "college";
const dbLink = "mongodb://localhost:27017";

const client = new MongoClient(dbLink);

const app = express();
app.use(express.urlencoded({extended:true}))

app.set("view engine", "ejs");


client.connect().then((connection)=>{
    const db = connection.db(dbName)

    app.get("/api",async(req,res)=>{
        const collection = db.collection("users");
        const students = await collection.find().toArray();
        res.send(students)
    })


    app.get("/add",(req,res)=>{
        res.render(`add-student`)

    })
     app.post("/add-student",async(req,res)=>{
        console.log(req.body);
        
        const collection = db.collection("users");
        const result = await collection.insertOne(req.body)
        console.log(result);

        res.send("data save")
    })

})


app.listen(3300);