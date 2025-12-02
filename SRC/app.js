const  express = require("express");
const app = express()

app.get("/user",(req,res , next)=>{
    console.log("handling response1")
    // res.send("response1")
    next()
},
(req,res , next)=>{
    console.log(" 2handling response1")
    // res.send("response2")
    next()
},(req,res , next)=>{
    console.log(" 3handling response1")
    // res.send("response3")
    next()
},
(req,res , next)=>{
    console.log(" 4handling response1")
    res.send("response4")
}
)
app.listen(1700,() => {
    console.log("server running at athr port 1700");
} )