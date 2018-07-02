var http=require('http');
var server=http.createServer(function(request,response){
    console.log('request starting...');

    //respond
if(request.url=="/hello"){
response.write('hello nidhiii...!!');
response.end();
}
if(request.url=="/lnt"){
    response.write(JSON.stringify({userName:"sam",age:23}));
    response.end()
}
});
server.listen(3000);
console.log('Server running at http://127.0.0.1:3000/');