var fs=require("fs");
var data="Mean Mern Stack training";

//Create a writable stream 
var writeStream =fs.createWriteStream('output.txt');


//write the data to stream
writeStream.write(data);

//Mark the end of file
writeStream.end();

//Handle stream events---->finish,and error
writeStream.on('finish',function(){
    console.log("Write completed.");
});

writeStream.on('error',function(err)
{
    console.log(err.stack);
});
console.log("Program Ended");
