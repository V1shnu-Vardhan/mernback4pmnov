let mongoose = require('mongoose')
mongoose.connect("mongodb+srv://vishnuvardhanc117:fODypvkgmb7uf2hF@db4pmnovnew.8hvwz.mongodb.net/?retryWrites=true&w=majority&appName=db4pmnovnew")
.then(res =>{
    console.log("connected")
})
.catch(err =>{
    console.log(err)
})


