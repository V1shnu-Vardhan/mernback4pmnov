let mongoose = require('mongoose')
let treatmentSchema = new mongoose.Schema({
    tname:{
        type:String,
        required:true,
    },
    tdes:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("treatments",treatmentSchema);