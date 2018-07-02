var MongoClient=require('mongodb').MongoClient;

var findQuery={_id:102};

MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db)
{
    if(err)
    {
        console.log(err)

    }
    db.collection('Employee').find(findQuery,{_id:0,Empname:1}).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    });
    db.close();
});