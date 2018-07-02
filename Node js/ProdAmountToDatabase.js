var products=require('./functionAmount');
var MongoClient=require('mongodb').MongoClient;

MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function (err,db)
{
if(err){
    console.log(err)
}

db.collection('Products').find().toArray(function(err,result){
   
    if(err) throw err;
    console.log(result);
     for(var i=0;i<result.length;i++){
         var a=products.calculateAmount(result[i].quantity,result[i].price);
         console.log("amount="+a);
         db.collection('Products').updateOne({prodId:result[i].prodId},
             {$set:{amount:a}}), function(err, res) {
            if (err) throw err;
            console.log("1 document updated");
         }
     }
     db.close();
    });


});