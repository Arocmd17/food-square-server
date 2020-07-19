const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Food = mongoose.model('Food')
router.get('/product-category/:productcategory',(req,res)=>{
    console.log(req.params.productcategory)
    Food.find({category:req.params.productcategory})
    .limit(20)
    .sort({foodName:-1})
    //.populte("PostedBy","_id name")
    .then(foods=>{
        res.json({foods})
    })
    .catch(err=>{
        console.log(err)
    })
})
module.exports = router