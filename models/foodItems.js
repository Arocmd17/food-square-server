const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    foodName:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:false
    },
    description:{
        type:String,
        required:true
    },
    picture:{
        type:String,
        default:""
    },
    quantity:{
        type:Number,
        default:0
    }
})
mongoose.model("Food",foodSchema)
