const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const requiredLogin = require('../middleware/requiredLogin')
router.put('/addtocart',requiredLogin,(req,res)=>{
    console.log(req.body)
    console.log(req.user)
    User.findByIdAndUpdate(req.user._id,{
        $push:{orders:req.body.foodId._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})

router.put('/checkout',requiredLogin,(req,res)=>{
    User.findByIdAndUpdate(req.body.userId,{
        $pull:{likes:req.food._id}
    },{
        new:true
    }).exec((err,result)=>{
        if(err){
            return res.status(422).json({error:err})
        }else{
            res.json(result)
        }
    })
})
module.exports = router