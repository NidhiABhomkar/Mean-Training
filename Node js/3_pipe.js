var fs=require("fs");

//create a raedable stream
var readerStream =fs.createReadStream('input.txt');

//create a writable stream
var writerStream=fs.createWriteStream('output.txt');

//pipe the raed and write operations
//raed input.txt and write data to output.txt
readerStream.pipe(writerStream);

console.log("Program Ended");