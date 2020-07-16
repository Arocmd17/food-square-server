const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const stockSchema = new mongoose.Schema({
    item:{
        type:ObjectId,
        ref:"Food"
    },
    quantity:{
        type:Number,
        required:true
    },
    // checkingBy:{
    //     type:ObjectId,
    //     ref:"User"
    // },
},{timestamps:true})
mongoose.model("Stock",stockSchema)