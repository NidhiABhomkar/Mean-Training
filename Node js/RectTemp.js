var http=require("http");
var r=require('./rectbl.js');
//var t=require('./temperaturebl.js');
var length=10;
var breadth=6;
//var celcius=25;
//var fahrenheit=273;
http.createServer(function(req,res){
    if(req.url==="/"){
        res.end(r);
    }else if(req.url==="/rectangle"){
        var a=r.calculateArea(length,breadth);
        res.end(a);
    }
       
   /* else if(req.url==="/temperature"){
       var f= t.calculateCelcius(fahrenheit);
        var c=t.calculateFahrenheit(celcius);
        res.end("Fahrenheit= "+ f+" ,Celcius= "+c);
    }*/
    else{
        res.end("404 error...Data not found");


    }    
}).listen(3000);
console.log("Server listening on port 3000");
