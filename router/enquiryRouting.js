let express = require('express');
let Enquiry = require('../model/enquiryModel')
let enquiryRouting = express.Router();

enquiryRouting.get("/enquiry", async (req,res)=>{
    let enquiry = await Enquiry.find();
    res.send(enquiry);
})



enquiryRouting.post("/enquiry",async (req,res)=>{
    let enquiry = new Enquiry(req.body)
    let result = await enquiry.save();
    res.send(result);
})

module.exports = enquiryRouting;