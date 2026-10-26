import express from "express";
const app = express()

app.get("/", (req, res) => {
    res.send("home page")
})

app.get("/users", (req, res) => {
    res.send("users page")
})
app.get("/error", (req, res) => {
    res.send("error page")
})


function errorHandling(erro,req,res,next){
    res.status(error.status || 500 ).send("try another way")
}
app.use(errorHandling)


app.listen(5800);