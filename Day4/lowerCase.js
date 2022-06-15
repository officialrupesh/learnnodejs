var http = require('http');
var lc = require('lower-case');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text,html'});
    res.write(lc.lowerCase("HELLO LOWER CASE"));
    res.end();
}).listen(8080);