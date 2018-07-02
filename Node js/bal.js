function listInstock(res){

    var inStock=data.filter(function(item){
        return item.avail=="In Stock";

    });
    res.end(JSON.stringify(inStock));
}

function listOnBackOrder(res){
    var onOrder=data.filter(function(item){
        return item.avail=="On back order";
    });
    res.end(JSON.stringify(onOrder));
}