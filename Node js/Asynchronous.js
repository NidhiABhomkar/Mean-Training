var fs=require('fs');
console.log("Program started");
fs.readFile('input.txt',function(err,data)
{

    if(err)
    {
        console.log(err)

    }
    else
    {
        console.log("asynchronous read:"+data.toString());
    }
});
    console.log("Program ended");
