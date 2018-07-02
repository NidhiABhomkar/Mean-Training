var fs=require("fs");
var data='';

//create a readable stream
var readerStream= fs.createReadStream('input.txt');


//Handle stream events -->data,end and error
readerStream.on('data',function(chunk){
    data += chunk;

});
readerStream.on('end',function(){
    console.log(data);
});


readerStream.on('error',function(err)
{
    console.log(err);
});