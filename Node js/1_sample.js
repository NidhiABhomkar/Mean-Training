var MongoClient=require('mongodb').MongoClient;

//var findQuery={empId:101};

MongoClient.connect('mongodb://127.0.0.1:27017/Employees',function(err,db)
{
    if(err)
    {
        console.log(err)

    }
    else 
    {
        var result=db.collection('emp').find();
        result.each(function(err,doc)
        {
            console.log(doc);
        })
        
    }

    db.close();

});