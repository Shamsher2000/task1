const app=require("./app");
const express=require("express");
const dotenv=require("dotenv");

//databases

dotenv.config({path:"backend/config/config.env"});

const connectdatabses=require("./config/database");
connectdatabses();
app.listen(process.env.PORT,()=>{
console.log(`server is running on ${process.env.PORT}`);
})