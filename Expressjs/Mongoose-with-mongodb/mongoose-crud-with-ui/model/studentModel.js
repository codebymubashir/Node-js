import studentSchema from "../schema/studentSchema.js";
import mongoose from "mongoose";
const StudentModel = mongoose.model("Student", studentSchema);

export default StudentModel