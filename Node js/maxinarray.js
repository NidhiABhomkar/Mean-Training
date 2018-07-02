const _=require("underscore")

var a=[10,112,20,30,110,120];
var b=[];
for(i=0;i<a.length;i++)
{
    if(a[i]>100)
    {
        b.push(a[i]);
    }
}

//console.log(result);
console.log(b);

