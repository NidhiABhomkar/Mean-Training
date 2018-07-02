
var a=[1,10,50,200,900,90,40,55,79,13];
var _=require('underscore');
var  odds =_.reject(a,function(item){return item %2==0})
console.log(a);
console.log(odds);