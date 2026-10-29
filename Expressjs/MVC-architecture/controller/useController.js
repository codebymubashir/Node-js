import { userList } from "../model/userModel.js";
export function handleController(req,res){
    const userData = userList();
    res.render("user",{user:userData})
}