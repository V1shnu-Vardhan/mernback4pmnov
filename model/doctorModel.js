let mongoose = require('mongoose')
let doctorSchema = new mongoose.Schema({
    treatmentname:{
        type:String,
        required:true,
    },
    doctorname:{
        type:String,
        required:true,
    },
    doctorqualification:{
        type:String,
        require:true,
    },
    yearsofexperience:{
        type:String,
        required:true,
    },
    contactnumber:{
        type:String,
        required:true,
    },
    emailid:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("doctors",doctorSchema);