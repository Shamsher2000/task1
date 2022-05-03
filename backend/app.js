const express=require("express");
app=express();
// route
const userroutes=require("./routes/userroutes");
app.use(express.json());

app.use("/api/v1",userroutes);
module.exports=app;