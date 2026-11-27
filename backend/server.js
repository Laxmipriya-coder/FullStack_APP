const express = require("express");
const cors = require("cors");
const { publicRoute } = require("./routes/public.route");
const { register_controller } = require("./controller/auth.controller");

const app = express();

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173"
}))

app.get("/health",(req,res)=>{
    res.status(200).json({message:"I am Ok"})
});


// Routes
app.use("/v1",publicRoute);

// Server 
app.listen(8090,()=>{
    console.log("Server is running");
})