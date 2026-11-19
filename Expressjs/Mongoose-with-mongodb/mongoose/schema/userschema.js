import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    age: Number,

})

export default userSchema