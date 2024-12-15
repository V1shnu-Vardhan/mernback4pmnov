let express = require('express')
let Doctor = require('../model/doctorModel')
let doctorRouting = express.Router();


doctorRouting.get("/doctor",async (req,res)=>{
    let doctor = await  Doctor.find();
    res.send(doctor)
})

doctorRouting.get("/doctor/:id",async (req,res)=>{
    let doctor = await Doctor.findOne({_id:req.params.id})
    res.send(doctor)
})


doctorRouting.post("/doctor",async (req,res)=>{
    let doctor = new Doctor(req.body);
    let result = await doctor.save();
    res.send(result);
})

doctorRouting.delete("/doctor/:id",async (req,res)=>{
    let doctor = await Doctor.deleteOne({_id:req.params.id})
    res.send(doctor)
})
doctorRouting.put("/doctor/:id",async (req,res)=>{
    let doctor = await Doctor.updateOne({_id:req.params.id},{$set:req.body})
    res.send(doctor)
})


module.exports = doctorRouting;