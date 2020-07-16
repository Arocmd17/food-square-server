const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types
const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phoneNumber:{
        type:Number,
        required:false
    },
    password:{
        type:String,
        required:true
    },
    userStatus:{
        type:String,
      default:"customer"
    },
    orders:[{type:ObjectId,ref:"Food"}],
     picture:{
        type:String,
        default:""
    }
},{timestamps:true})
mongoose.model("User",userSchema)