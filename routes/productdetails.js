const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Food = mongoose.model('Food')
router.get('/product/:productId',(req,res)=>{
    console.log(req.params.productId)
    Food.findOne({_id:req.params.productId})
    //.populte("PostedBy","_id name")
    .then(foods=>{
        res.json({foods})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router