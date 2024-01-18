const mongoose=require('mongoose')


const detailSchema=mongoose.Schema({
    Fname:String,
    Lname:String,
    Mobile:Number,
})


module.exports=mongoose.model('details',detailSchema)