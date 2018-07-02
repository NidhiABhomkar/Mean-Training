var fs=require("fs");

fs.link('Asynchronous.js','nidhi_copy.js',function(err)
{
    if(err)
    {
        console.error(err);
    }
    else
    {
        console.log("File copied sucessfully");
    }
});