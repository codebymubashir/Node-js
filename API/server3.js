
const http = require("http")


const staticApiData = [
    {id: 1, name: "Ali", Role: "Developer", level:"high"},
    {id: 2, name: "Ahmad", Role: "Manager", level:"medium"},
    {id: 4, name: "Sarah", Role: "Tester", level:"inter"},
    {id: 5, name: "Sarim", Role: "Developer", level:"medium"},
    {id: 6, name: "Surayiah", Role: "Designer", level:"medium"},
    {id: 7, name: "Shahzaib", Role: "HR", level:"expert"},
    {id: 8, name: "Sayam", Role: "Manager", level:"medium"},
    {id: 9, name: "abdullah", Role: "Admin", level:"fresher"},
    {id: 10, name: "mubashir", Role: "Tester", level:"medium"},
]

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Welcome to the home!")
        res.end()
    }

    else if(req.url === "/api/users"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(staticApiData))
        res.end()
    }

    else{
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify({error: "Failed to fetch data!"}))
        res.end()
    }
})

const PORT = 4500
server.listen(PORT, ()=>{
    console.log("Server listening at Port", PORT)
})







