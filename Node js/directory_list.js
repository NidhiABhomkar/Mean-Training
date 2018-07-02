var fs=require("fs");

fs.readdir('D:\\Node.js',function(err,files)
{
    if(err)
    {
        console.log("error"+err);

    }
    else{
        console.log(files);
    }
});