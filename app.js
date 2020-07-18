const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')

const {MONGOURI} = require('./config/keys')
//const PORT = 5000;
const PORT = process.env.PORT || 5000;
const app = express()
mongoose.connect(MONGOURI,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
    } 
)
mongoose.connection.on('connected',()=>{
    console.log(`Application connected successfully to ${MONGOURI}!`);
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

app.use(morgan('tiny'));
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

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
}

app.listen(PORT,()=>{
    console.log("Server is running on", PORT)
})