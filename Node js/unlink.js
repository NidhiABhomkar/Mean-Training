var fs=require("fs");

fs.unlink('sona_copy.js',function(err)
{
    if(err)
    {
        console.error(err);
    }
    else
    {
        console.log("File deleted sucessfully");
    }
});