let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    let dbo = db.db("food-quarter");
    dbo.collection("foods").find({},{projection:{_id:0, foodName: 1, category: 1}})
    .toArray((err, result)=>{
        if(err) throw err;
        console.log(result)
        db.close()
    })
})