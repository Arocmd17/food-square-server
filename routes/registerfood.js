const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requiredLogin = require('../middleware/requiredStaff')
const Food = mongoose.model('Food')
const Stock = mongoose.model('Stock')

router.post('/register-food',(req, res)=>{
    const {foodName, category, price, description, picture, quantity} = req.body
    if(!foodName || !category || !price || !description){
        return res.status(422).json({error:"please enter all the fields"})
    }
    Food.findOne({foodName:foodName})
    .then((savedFood)=>{
        if(savedFood){
           return res.status(422).json({error:"This item has been registered already."})
        }
        // create an instance of User
        const foodItem = new Food({
            foodName, 
            category, 
            price,
            quantity, 
            description,
            picture
        })
        // store instance of user
        foodItem.save()
        .then(foodItem =>{
            const stockFood = new Stock({
            item: foodItem._id,
            quantity:0
            //checkingBy:req.user
            })
            stockFood.save()
            .catch(err =>{
                console.log(err)
            })
            res.json({message:`${foodItem.foodName} saved successfully`})
        })
        .catch(err =>{
            console.log(err)
        })
    })
    .catch(err =>{
        console.log(err)
    })
})
module.exports = router