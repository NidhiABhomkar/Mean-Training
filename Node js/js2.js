var data=require("./data/inventory");

var f2=function listOnBackOrder(res){
    var onOrder=data.filter(function(item){
        return item.avail=="On back order";
    });
    res.end(JSON.stringify(onOrder));
}
module.exports.f2=listOnBackOrder;