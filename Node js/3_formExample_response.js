var http=require("http")
var fs=require("fs");
var qs=require('querystring');
var fahren;
var celsius;
http.createServer(function(req,res){

if(req.method=="GET"){
    res.end(`<!DOCTYPE html>
    <html>
        <head>
            <title>
            Temperature Conversion
            </title>
        </head>
        <body>
        <form action="/" method="post">
            <label>Farhen</label>
            <input type="text" name="fahren" id="fahren" placeholder="Fahrenheit temperature" required/>
            <input type="tex" id ="celsius" name="celsius" required readonly />
            
            <button>Send</button>
        </form>
        </body>
    </html>
            `);
    }else if(req.method=="POST"){
        var body="";
        req.on ("data",function(chunk){
            body+=chunk;
            console.log("data");

        });

        req.on("end",function(){
            var obj=qs.parse(body);

            console.log(obj.fahren);
            fahren=parseFloat(obj.fahren);
            celsius=(5/9)*(fahren-32.0);

            res.end(`<!DOCTYPE html>
                    <html>
                    <head>
                    <title>Temperature Converter</title>
                    </head>
                    <body>
                    <form action="/" method="post">
                    <label>Farhen</label>
                    <input type="text" name="fahren" id="fahren" placeholder=${fahren} required/>
                    <input type="tex" id ="celsius" name="celsius" value=${celsius} required readonly />
                    <button>Send</button>
                    </form>
                    </body>
                </html>
                        `); 

        });
    }


}).listen(3000);
console.log("Form server listening on pore 3000");