var MongoClient=require('mongodb').MongoClient;

var empDoc={_id:107,Empname:"Sid",Department:"Cyber",basicPAy:25000,Location:"Chennai"};

MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db)
{
    if(err)
    {
        console.log(err)

    }
    db.collection('Employee').insert(empDoc,function(err,result){
        if(err)throw err;
        else{
                console.log("Document inserted successfully");
        }
          db.close(); 
    });
    db.close();
});