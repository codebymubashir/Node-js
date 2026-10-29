
import { userModel } from "../model/userModel.js"
export function useController(req, res){
    res.render("user", {user: userModel()})
}