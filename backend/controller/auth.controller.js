const fs = require("fs");
const { findAlldata } = require("../utils/utils");
const userpath = './db/users.json'

const registerController = (req,res)=>{
    const {username,password, age, gender,email} = req.body;
    if(!username || !password || !age || !gender || !email){
        return res.status(200).json({message:"Insufficient Data"})
    }
    const allusers = findAlldata(userpath);

    const isEmailexit = allusers.find((user)=> user.email === email)
}

module.exports= {registerController}
