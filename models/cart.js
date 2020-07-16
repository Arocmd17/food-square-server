const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const cartSchema = new mongoose.Schema({
    item:{
        type:ObjectId,
        ref:"Food"
    },
    quantity:{
        type:Number,
        required:true
    },
    addedBy:{
        type:ObjectId,
        ref:"User"
    },
},{timestamps:true})
mongoose.model("Cart",cartSchema)