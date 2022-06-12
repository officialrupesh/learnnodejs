var http = require('http');
http.createServer(function(req,res)
{
    res.writeHead(200, {'Content-Type': 'text/html'}); // res.writeHead() is the status code
    //200 means that all is ok, second arguement is an object containing the response header
    res.write("Hello World");
    res.end();
}).listen(8080);
