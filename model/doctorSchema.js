
const mongoose = require("mongoose");

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    location: {
        type: String,

    },
    date: {
        type: String
    },
    slots: {
        type: Number
    },
    fees: {
        type: Number
    }
}, {
    versionKey: false
});


const DoctorModel=mongoose.model("hospital",doctorSchema)
module.exports={
    DoctorModel
}