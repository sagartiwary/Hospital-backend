const mongoose=require("mongoose");
require("dotenv").config();
let url=process.env.MONGO_URL
// connect to database here

const connect=mongoose.connect(url);
module.exports={
    connect
}
