const fs = require("fs");
const { url } = require("inspector");
const { json } = require("stream/consumers");

const findAlldata = (req,res)=>{
    try {
        return JSON.parse(fs.readFileSync(url,"utf8"))
    } catch (error) {
        
    }
}

module.exports = {findAlldata}