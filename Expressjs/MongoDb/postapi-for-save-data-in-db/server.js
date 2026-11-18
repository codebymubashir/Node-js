import express from 'express'
import { MongoClient, ObjectId } from 'mongodb'

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set("view engine","ejs")

const dbName = "college"
const url = "mongodb://localhost:27017";


const client = new MongoClient(url)

client.connect().then(()=>{
    
app.get("/",async(req,res)=>{
    const db = client.db(dbName);
    const collection = db.collection("users");
    const result = await collection.find().toArray();
    console.log(result);
    
})

app.post("/add-student-api",(req,res)=>{
    console.log(req.body);


    const {name,email,age} = req.body;
    if(!name || !email || !age){
        res.send({message:"operation failed",success:false})
        return false
    }

    const db = client.db(dbName);
    const collection = db.collection("users")
    const result = collection.insertOne(req.body )
    
    res.send({message:"data stored",success:true,result:result})
})


app.delete("/delete/:id",async(req,res)=>{
    const db = client.db(dbName);
    const collection = db.collection("users")
    const result = await collection.deleteOne({_id: new ObjectId(req.params.id)})
    if (result) {
        res.send({
            message:"data deleted",
            success:true   
        })
        
    }else{
        res.send({
            message:"data not deleted",
            success:false
        })
    }
    res.send("working")
})
})


app.listen(5500)
