let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err,db)=>{
    if(err) throw err;
    let dbo = db.db("food-quarter");
    let food = [
        {foodName:"juice", category:"Beverages", price:"100", description:"It energizes"},
        {foodName:"soda", category:"Beverages", price:"200", description:"It energizes"},
        {foodName:"sandwich loaves", category:"Bread/Bakery", price:"500", description:"It energizes"},
        {foodName:"dinner rolls", category:"Bread/Bakery", price:"800", description:"It energizes"},
        {foodName:"bagels", category:"Bread/Bakery", price:"500", description:"It energizes"}
    ]
    
    dbo.collection("foods").insertMany(food,(err,res)=>{
        if (err) throw err;
        console.log(res)
        console.log(`${res.insertedCount} were successfully inserted`);
        db.close()
    })
    
})