var product=require('./product1');
var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err, db) {
    if(err)    {
        console.log(err);
    }
    db.collection('Products').find().toArray(function(err,result){
        if(err) throw err;
        console.log(result);
      for(var i=0;i<result.length;i++){
            console.log("BillPrice ="+product.billPrice(result[i].quantity,result[i].price))
       }
        db.close();
    });
})