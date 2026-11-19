import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:Number
})

export default userSchema;