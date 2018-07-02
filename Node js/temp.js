var info=require('./tempjson');
function fToC(f){
    var c = (5/9) * (f - 32);
    return c;
}
/*function cToF(res){
    var fahernhiet=data.filter(function(item){
        return item*(9/5)+32;
    });
    res.end(JSON.stringify(fahernhiet));
}*/
module.exports.fToC=fToC;
//module.exports.cToF=cToF;
