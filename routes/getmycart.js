const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')
const requiredLogin = require('../middleware/requiredLogin')
router.get('/mycart',requiredLogin,(req,res)=>{
    console.log(req.user._id)
    User.findOne({_id:req.user._id})
    .populate("orders","_id foodName price")
    .then(user=>{
        console.log(user)
        res.json({user})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router