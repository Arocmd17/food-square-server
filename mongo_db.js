let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/food-quarter";

MongoClient.connect(url, (err,db)=>{
    if(err) throw err;
    console.log("Database created successfully!");
    db.close()
})