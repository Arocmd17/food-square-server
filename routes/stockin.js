const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Food = mongoose.model('Food')
router.post('/stockin',(req,res)=>{
    Food.findOne({foodName:foodName})
    //.populte("PostedBy","_id name")
    .then(foods=>{
        
        res.json({foods})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router