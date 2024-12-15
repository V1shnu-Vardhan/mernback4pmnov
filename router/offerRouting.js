let express = require('express');
let Offer = require('../model/offerModel')
let offerRouting = express.Router();

offerRouting.get("/offer",async (req,res)=>{
    let offer = await Offer.find()
    res.send(offer)
})
offerRouting.get("/offer/:id",async (req,res)=>{
    let offer = await Offer.findOne({_id:req.params.id})
    res.send(offer)
})

offerRouting.post("/offer",async (req,res)=>{
    let offer = new Offer(req.body)
    let result = await offer.save();
    res.send(result)
})

offerRouting.delete("/offer/:id",async (req,res)=>{
    let offer =await Offer.deleteOne({_id:req.params.id})
    res.send(offer)
})
offerRouting.put("/offer/:id",async (req,res)=>{
    let offer = await Offer.updateOne({_id:req.params.id},{$set:req.body})
    res.send(offer)
})

module.exports = offerRouting;