var MongoClient=require('mongodb').MongoClient;

var empDoc=[{_id:108,Empname:"Idris",Department:"JavaDeveloper",basicPAy:55000,Location:"Bangalore"},
{_id:109,Empname:"Kaminay",Department:"C developer",basicPAy:35000,Location:"Chennai"}];

MongoClient.connect('mongodb://127.0.0.1:27017/MyDatabase',function(err,db)
{
    if(err)
    {
        console.log(err)

    }
    db.collection('Employee').insertMany(empDoc,function(err,result){
        if(err)throw err;
        else{
                console.log("Document inserted successfully");
        }
          db.close(); 
    });
    db.close();
});