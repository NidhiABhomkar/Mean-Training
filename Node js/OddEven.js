var a=[2,12,3,35,7,8,105];
var _=require('underscore');
var oddList=_.filter(a,function(item){return item %2 !=0});
var evenList=_.filter(a,function(item){return item %2==0})
console.log("oddlist:"+oddList);
console.log("evenList:"+evenList);