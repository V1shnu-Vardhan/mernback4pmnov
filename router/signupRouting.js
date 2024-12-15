let express = require('express');
let Signup = require('../model/signupModel')
let signupRouting = express.Router();

signupRouting.post("/signup",async (req,res)=>{
    let signup = new Signup(req.body)
    let result = await signup.save();
    res.send(result)
})
signupRouting.post("/login",async (req,res)=>{
    let {email,password} = req.body;
    let exists = await Signup.findOne({email:email});
    if(!exists){
        res.send("No user")
    }
    else if(exists.password == password){
        res.send("valid")
    }
    else{
        res.send("invalid")
    }
})

module.exports = signupRouting;
