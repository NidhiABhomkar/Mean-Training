var MongoClient=require('mongodb').MongoClient;

var findQuery={_id:101};

MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db)
{
    if(err)
    {
        console.log(err)

    }

    else 
    {
        var result=db.collection('Employee').find(findQuery);
        result.each(function(err,doc)
        {
            console.log(doc);
        })
        
    }

    db.close();

});