const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const checkoutSchema = new mongoose.Schema({
    item:{
        type:ObjectId,
        ref:"User"
    },
    quantity:{
        type:Number,
        required:true
    },
    checkoutBy:{
        type:ObjectId,
        ref:"User"
    },
    approvedBy:{
        type:ObjectId,
        ref:"User"
    },
},{timestamps:true})
mongoose.model("Checkout",checkoutSchema)