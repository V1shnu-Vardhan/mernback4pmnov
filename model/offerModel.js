let mongoose = require('mongoose')
let offerSchema = new mongoose.Schema({
    offertitle:{
        type:String,
        required:true,
    },
    offerdescription:{
        type:String,
        required:true,
    },
})

module.exports = mongoose.model("offers",offerSchema);