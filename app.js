const express = require('express')
const mongoose = require('mongoose')
const url = "mongodb://localhost:27017/food-quarter";
const PORT = 5000;
const app = express()
mongoose.connect(url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } 
)
mongoose.connection.on('connected',()=>{
    console.log("Database created successfully!");
})
mongoose.connection.on('error', (err)=>{
    console.log("error connecting", err)
})// failed connection

//Import models
require('./models/cart') 
require('./models/checkout') 
require('./models/foodItems') 
require('./models/stock') 
require('./models/user') 

app.use(express.json())

  // Import router
app.use(require('./routes/home'))
app.use(require('./routes/registerfood'))
app.use(require('./routes/auth'))
app.use(require('./routes/productdetails'))
app.use(require('./routes/addtocart'))
app.use(require('./routes/getmycart'))
// app.get('/',(req,res)=>{
//     res.send('It is working')
// })
app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})