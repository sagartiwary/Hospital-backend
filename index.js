const express=require("express");
const { connect } = require("./DB/db");
const { Router } = require("./route/userRoute");
const { dRouter } = require("./route/doctorRoute");
const app=express();
require("dotenv").config();
const port=process.env.PORT|| 3500;
const cors=require('cors')
app.use(express.json());
app.use(cors())
app.use("/users",Router);
app.use("/doctors",dRouter)
app.listen(port,async(req,res)=>{
    try {
        await connect;
        console.log(`db is running at port ${port}`)
    } catch (error) {
        console.log(`It is not connected yet`)
    }
})