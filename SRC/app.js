const  express = require("express");
const app = express()
app.use("/vin",(req,res)=>{
    res.send("hello from server")
})
app.use("/vinn",(req,res)=>{
    res.send("hello from ssserver")
})
app.use("/test",(req,res)=>{
    res.send("hello from tezttt")
})
app.listen(1234,()=>{
 console.log("server is suceesfully running on port '1234' ");
})
