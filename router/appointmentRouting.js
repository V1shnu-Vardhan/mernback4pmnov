let express = require('express');
let Appointment = require('../model/appointmentModel')
let appointmentRouting = express.Router();

appointmentRouting.get("/appointment",async (req,res)=>{
    let appointment = await Appointment.find();
    res.send(appointment);
})

appointmentRouting.post("/appointment",async (req,res)=>{
    let appointment = new Appointment(req.body)
    let result = await appointment.save();
    res.send(result);
})

module.exports = appointmentRouting;