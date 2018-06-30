var MongoClient = require('mongodb').MongoClient;


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

                        <label>EmpName</label>
                        <input type="text" id="empName" name="empName" required/>

            
                        <label>basicPay</label>
                        <input type="text" id="basicPay" name="basicPay" required/>

                        <button>Save</button>
                    </form>
                </body>
            </html>
             `);
    } else if(req.method=="POST")
            {
                var body="";
                req.on("data",function(chunk)
                {
                    body+=chunk;
//                  console.log("data");
                });
                    req.on("end",function()
                
                {
                    var obj=qs.parse(body);
                    empId= parseInt(obj.empId);
                    empName=(obj.empName);
                    basicPay=parseInt(obj.basicPay);
                    netPay=r.calculateNetPay(basicPay);
                  // console.log(body);
                  console.log(empId) 
                  console.log(empName)
                  console.log(basicPay)



                    MongoClient.connect("mongodb://localhost:27017", function(err, db) 
                    {
                        if (err) throw err;
                        else{
                        var dbo = db.db("Emprec");
                        var a={_id:empId, EmployeeName:empName,BasicPay:basicPay,NetPay:netPay};
                                        
                        dbo.collection("edetails").insert(a, function(err, res) 
                        {
                            if (err) throw err
                            db.close();
                        });}
                    });
                    res.end( `<!DOCTYPE html>
                                <html>
                                    <body>
                                        <h1>Employee Details</h1>
                                        <form action="/">
                                            <label>EmpId</label>
                                            <input type="text" id="empId" name="empId" value=${empId} required/>

                                            <label>EmpName</label>
                                            <input type="text" id="empName" name="empName" value=${empName} required/>

                                            <label>BasicPay</label>
                                            <input type="text" id="basicPay" name="basicPay" value=${basicPay} required/>

       
                                            <label>NetPay</label>
                                            <input type="text" id="netPay" name="netPay" value=${netPay} required/>
                                            <button>Save</button>
                                        </form>
                                    </body>
                                </html>
                            `);
                });
            }
        }).listen(3000);
                console.log("form server listening on port 3000");
                