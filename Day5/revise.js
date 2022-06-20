const { write } = require('fs');
var http = require('http');  //way to include http module
var url;

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("Rupesh");
    return res.end();
}).listen(8080);