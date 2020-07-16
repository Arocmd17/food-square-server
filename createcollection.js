let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err,db)=>{
    if(err) throw err;
    let dbo = db.db("food-quarter");
    dbo.createCollection("foods",(err,res)=>{
        if (err) throw err;
        console.log("Collection created successfully!");
        db.close()
    })
    
})