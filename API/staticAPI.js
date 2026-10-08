
const http = require("http")


const staticApiData1 = [
    {id: 1, name: "Ali", Role: "Developer", level:"high"},
    {id: 2, name: "Ahmad", Role: "Manager", level:"medium"},
    {id: 4, name: "Sarah", Role: "Tester", level:"inter"},
    
]

const staticApiData2 = [
    {id: 5, name: "Sarim", Role: "Developer", level:"medium"},
    {id: 6, name: "Surayiah", Role: "Designer", level:"medium"},
    {id: 7, name: "Shahzaib", Role: "HR", level:"expert"},
]

const staticApiData3 = [
    {id: 8, name: "Sayam", Role: "Manager", level:"medium"},
    {id: 9, name: "abdullah", Role: "Admin", level:"fresher"},
    {id: 10, name: "mubashir", Role: "Tester", level:"medium"},
]


const server = http.createServer((req, res)=>{
    if(req.url === "/"){
        res.write("Welcome to the home!")
        res.end()
    }

    else if(req.url === "/api/user1"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(staticApiData1))
        res.end()
    }
     else if(req.url === "/api/user2"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(staticApiData2))
        res.end()
    }
     else if(req.url === "/api/user3"){
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(staticApiData3))
        res.end()
    }
    else if(req.url === "/api/users"){

        const allData = {
        group1: staticApiData1,
        group2: staticApiData2,
        group3: staticApiData3
    }
        res.statusCode = 200
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify(allData))
        res.end()
    }

    else{
        res.statusCode = 404
        res.setHeader("Content-Type", "application/json")
        res.write(JSON.stringify({error: "Failed to fetch data!"}))
        res.end()
    }
})

const PORT = 5000
server.listen(PORT, ()=>{
    console.log("Server listening at Port", PORT)
})







