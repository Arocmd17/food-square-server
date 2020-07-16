const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Food = mongoose.model('Food')
router.get('/home',(req,res)=>{
    Food.find()
    //.populte("PostedBy","_id name")
    .then(foods=>{
        res.json({foods})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router
