//This is a node.js file that will read the html that was created before with readfiles.html

var http = require('http');
var fs = require('fs');         // used to include files system module

http.createServer(function(req,res){
    fs.readFile('readfiles.html',function(err,data)
    {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);