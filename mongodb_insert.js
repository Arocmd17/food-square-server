let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err,db)=>{
    if(err) throw err;
    let dbo = db.db("food-quarter");
    let food = {foodName:"coffee", category:"Beverages", price:"100", description:"Awaken sense"}
    dbo.collection("foods").insertOne(food,(err,res)=>{
        if (err) throw err;
        console.log("1 food was inserted successfully!");
        db.close()
    })
    
})