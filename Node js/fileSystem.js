var fs=require('fs');
var data=fs.readFileSync('input.txt');
console.log("Synchronous read:"+data.toString());
console.log("Program Ended");
