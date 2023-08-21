const express=require("express");
const { userRegistered, userLogin } = require("../controller/userConroller");
const Router=express.Router();


// setting registration logic here
Router.post("/register",userRegistered)
Router.post("/login",userLogin)
module.exports={
    Router
}