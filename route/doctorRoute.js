const express = require("express");
const { addDoctor, getDoctor, editDoctor, deleteDoctor } = require("../controller/doctorConroller");
const { auth } = require("../Middleware/auth.middleware");
const dRouter = express.Router();



// post the doctor
dRouter.post('/post', auth, addDoctor)
dRouter.get("/", getDoctor)
dRouter.put("/update/:id", auth, editDoctor);
dRouter.delete("/delete/:id", auth, deleteDoctor)
module.exports = {
    dRouter
}