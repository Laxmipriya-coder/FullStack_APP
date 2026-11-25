const express = require("express");

const publicRoute = express.Router();
// Router method give only routes

// publicRoute.get("/login",(req,res)=>{
//     res.status(200).json({message:"This is Login request"})
// });

publicRoute.post("/register",(req,res)=>{
    res.status(200).json({message:"User registered Successfully"})
})

module.exports = {publicRoute}