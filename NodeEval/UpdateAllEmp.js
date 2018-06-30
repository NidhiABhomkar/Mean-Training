var MongoClient=require('mongodb').MongoClient;
const http=require("http");
const qs=require("querystring");
var eid;
var amt;
http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
           `
            <html>
            <head>
            <style>
            </style>
            </head>
            <body>
            <h1>Employee_Data</h1><hr>
            <form action="/" method="POST">
            <label>New Amount</label><br>
            <input type="text" id="amt" name="amt" required/><br>
            <b>"Press Submit to Update Employee Data"<b><br>
            <button>Submit</button>
            </form></body></html>`
             );
    }
    else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk)
    {
        body+=chunk;
        //console.log(body);
    });
    req.on("end",function()
{
    var obj1=qs.parse(body);
    amt=obj1.amt;
    eid=obj1.eid;
    console.log(eid);
    
    MongoClient.connect("mongodb://localhost:27017/", function(err, db) {
      if (err) throw err;
      var dbo = db.db("DummyProject");
      var amt1=parseFloat(amt);
      var updval={$inc:{BasicPay: amt1}}
      console.log(amt1);
    dbo.collection("Employees").update({},updval,{multi:true},function(err){
        if (err)
        {
            throw err;
        }
        else{
        res.end(`
        <html>
        <head>
        <style>
        </style>
        </head>
        <body>
        <h1>Employee_Data</h1><hr>
        <form action="/" method="POST">
        <label>BasicPay Updated for All!</label><br>
        </form></body></html>`);
    ;}
    db.close();
      });
});
    });
}}).listen(3000);
console.log("form server listening on port 3000");