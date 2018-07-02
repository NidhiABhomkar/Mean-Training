var http=require("http");

var data=require("./data/inventory");

http.createServer(function(req,res){
   
    if(req.url=="/"){
         res.end(JSON.stringify(data));

    }else if(req.url=="inStock"){
        listInstock(res);
    }else if(req.url=="/onOrder"){
        listOnBackOrder(res);
    }else {
        res.end("404 Error...Data not found");
    }
}).listen(3000);
console.log("Server listening on port 3000");

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