var a=[1,10,50,445,90,110];
var _=require('underscore');
var results=_.filter(a,function(item){
    return item>100});
console.log(results);