let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, (err, db)=>{
    if (err) throw err;
    let dbo = db.db("food-quarter");
    let query = {foodName:/^S/}
    dbo.collection("foods").deleteMany(query,(err, obj)=>{
        if(err) throw err;
        console.log(obj.result.n + " documents(s) deleted ")
        db.close()
    })
})