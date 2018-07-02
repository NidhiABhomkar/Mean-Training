 var http=require("http");
 var fs=require("fs");
 var path=require("path");
 

http.createServer(function(req,res){
     console.log(`${req.method},request for $(req.url)`);
     if(req.url.match("birds.jpg")){
         var imgPath=path.join(__dirname,req.url);
         console.log(imgPath);
          var imgStream=fs.createReadStream(imgPath);
        imgStream.pipe(res);
     }
     else{
         res.end("404 File not found");
     }
 }).listen(3001);
 console.log("File Server running on port 3001" );