var http=require('http');
var server=http.createServer(function(request,response){
    console.log('request starting...');

    //respond

response.write('hello...!!');
response.end();

});
server.listen(3000);
console.log('Server running at http://172.29.122.210:3000/');