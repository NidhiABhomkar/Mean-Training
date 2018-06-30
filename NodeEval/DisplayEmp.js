var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

 var http=require("http");
 var qs=require("querystring");
 var r=require('./EmployeeBal.js');
 var empId;
 var empName;
 var basicPay;

var netPay;

 http.createServer(function(req,res)
{
    if(req.method=="GET")
    {
        res.end(
                `<!DOCTYPE html>
                 <html>
                    <body>
                        <h1>Details Of Employee</h1>
                        <form action="/" method="POST">
                            <label>EmpId</label>
                            <input type="text" id="empId" name="empId" required/>

                        <button>GetDetails</button>
                        </form>
                    </body>
                </html>
                `);
    } else if(req.method=="POST")
    {
        var body="";
        req.on("data",function(chunk){
            body+=chunk;
        });
        req.on("end",function(){
            var obj=qs.parse(body);
            empId= parseInt(obj.empId);
            empName=(obj.empName);
            basicPay=parseInt(obj.basicPay);
            netPay=r.calculateNetPay(basicPay);
          // console.log(body);
          console.log(empId) 
          //console.log(empName)
         //console.log(basicPay)


            MongoClient.connect("mongodb://127.0.0.1:27017/",function(err,db){
                var dbo=db.db("DummyProject");
                var findQuery={EmployeeId:empId};
                dbo.collection("Employees").findOne(findQuery,function(err,result){
                    if(err){
                        res.write("Employee not present");
                    }
                    else{
                        //console.log(result.empId);
                        //console.log(result.empName);
                        //console.log(result.basicPay);
                        //console.log(result.netPay);
                        res.end(
                            `
                            <!DOCTYPE html>
                            <html>
                            <head>
                            <title>Employee Details</title>
                            </head>
                            <body>
                            <H1>Employee Details</H1>
                            <form>
                            <label>EmployeeId : </label>
                            <input type="text" id="empId" name="empId" value=${result.EmployeeId}>
                            
                            <label>EmployeeName : </label>
                            <input type="text" id="empName" name="empName" value=${result.EmployeeName}>
                            
                            <label>Basic pay : </label>
                            <input type="text" id="basicPay" name="basicPay" value=${result.BasicPay}>
                            
                            
                            <label>Net pay : </label>
                            <input type="text" id="netPay" name="netPay" value=${result.NetPay}>
                            
                            
                            </form>
                            </body>
                            </html>
                            `
                        )
                    }
                });
            });

    });
}

}).listen(3000);
console.log("Server running on port 3000");