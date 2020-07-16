let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    let dbo = db.db("food-quarter");
    let query = {category:/^B/}
    dbo.collection("foods").find(query).toArray((err, result)=>{
        if(err) throw err;
        console.log(result)
        db.close()
    })
})