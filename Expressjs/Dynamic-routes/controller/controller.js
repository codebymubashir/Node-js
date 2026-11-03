import { users } from "../model/userData.js"

export function showUsers(req, res){
    res.render("users", {users: users})
}

export function showAllUsersData(req, res){
    res.render("allUsers", {users: users})
}

export function showIndiviualUser(req, res){
    const id = req.params.id
    const user = users.find(u => u._id === id)

    if (!user) {
        return res.status(404).send("User not found")
    }

    res.render("user", {user: user})
}