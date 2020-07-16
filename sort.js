let MongoClient = require('mongodb').MongoClient;
let url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("food-quarter");
  var mysort = { foodName: 1 };
  dbo.collection("foods").find().sort(mysort).toArray((err, result)=> {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});