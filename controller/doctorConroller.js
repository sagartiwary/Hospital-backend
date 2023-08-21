

// add the data to db

const { DoctorModel } = require("../model/doctorSchema");

const addDoctor = async (req, res) => {
    const { name, image, specialization, experience, location, date, slots, fees } = req.body;
    try {
        let newDoctor=new DoctorModel({
            name,image,specialization,experience,location,date,slots,fees
        })
        await newDoctor.save();
        res.status(200).json({msg:"Doctor added successfully",data:newDoctor})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}


// get doctor 

const getDoctor=async(req,res)=>{
    
    try {
        let gotData=await DoctorModel.find(req.body);
        res.status(200).json({msg:"Sucessful",data:gotData})
    } catch (error) {
        res.status(400).json({msg:"Something wrong",err:error.message})
    }
}


const editDoctor=async(req,res)=>{
    const {id}=req.params;
    try {
        let updatedDoctor= await DoctorModel.findByIdAndUpdate({_id:id},req.body);
        res.status(200).json({msg:"Updated successful",data:updatedDoctor})
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

const deleteDoctor=async(req,res)=>{
    const { id } = req.params;
    try {
        let deleteDoctors = await DoctorModel.findByIdAndDelete({ _id: id }, req.body);
        res.status(200).json({ msg: "Delete successful", data: deleteDoctors })
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

module.exports={
    addDoctor,getDoctor,editDoctor,deleteDoctor
}