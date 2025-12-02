const  express = require("express");
const app = express()
const {adminAuth, userAuth} = require("./Middleware/auth.js")

app.use("/admin", adminAuth)
app.use("/admin/userdata" , (req , res) => {
    res.send("user data")
})
app.use("/admin/deletedata", (req , res) => {
    res.send("deleted data successfully")
})
app.post("/user/login", (req,res)=>{
    res.send("user logged successfully")
})
app.use("/user/data",userAuth,(req , res) => {
    res.send("user data send")
})
app.listen(1700,() => {
    console.log("server running at athr port 1700");
} )