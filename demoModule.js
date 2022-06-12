var http = require('http');
var dt = require('./myownmodule');            //  ./ is used to locate the module ie module located same as node.js file

http.createServer(function (req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write("The date and time currently are : "+dt.myDateTime());
    res.end();
}).listen(8080);