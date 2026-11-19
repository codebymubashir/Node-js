import mongoose from "mongoose";
import userSchema from "../schema/userschema.js";


const userModel = mongoose.model("user",userSchema)

export default userModel