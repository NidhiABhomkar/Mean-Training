var http=require('http')
var server =http.createServer(function(request,response){
    console.log('request starting...');
    //respond



    console.log(request.method);
    if(request.url=="/hello"){

        response.write("hello nidhi");
        response.end();

    }
    if(request.url=="/lnt")
    {
       response.write(JSON.stringify({userName:"sid",age:23}));
        response.end();
    }
    });
    server.listen(3001);
    console.log('Server runing at http://172.29.122.111:3001/');

