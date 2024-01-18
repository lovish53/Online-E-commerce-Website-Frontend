const mongoose=require('mongoose')

const parkingSchema=mongoose.Schema({
    Email:String,
    password:String
})

module.exports=mongoose.model('reg',parkingSchema)