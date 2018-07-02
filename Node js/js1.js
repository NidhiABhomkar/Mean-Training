var data=require("./data/inventory");
var f1=function listInstock(res){
   
    var inStock=data.filter(function(item){
        return item.avail=="In Stock";

    });
    res.end(JSON.stringify(inStock));
}

module.exports.f1= listInstock;