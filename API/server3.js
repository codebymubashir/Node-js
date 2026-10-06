
const http = require("http")


const staticApiData = [
    {id: 1, name: "Ali", Role: "Developer"},
    {id: 2, name: "Ahmad", Role: "Manager"},
    {id: 3, name: "Sarah", Role: "Tester"},
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

const PORT = 3600
server.listen(PORT, ()=>{
    console.log("Server listening at Port", PORT)
})







