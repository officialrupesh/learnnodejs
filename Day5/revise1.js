var http =require('http');
var url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    var s = url.parse(req.url,true).query;
    var a = s.n+ " "+s.ad;
    res.end(a);
}).listen(8080);