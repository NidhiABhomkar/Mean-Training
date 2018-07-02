var fs=require("fs");
fs.mkdir('../lib\\hello3',function(err,files)
{
    if(err)
    {
        console.log("erroe"+err);
    }
    else
    {
        console.log(files);
    }
});