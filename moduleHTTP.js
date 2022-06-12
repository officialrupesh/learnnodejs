/* http is built in module in node.js that allows node.js 
to transfer data over hyper text transfer protocol (HTTP) */
// use require() function to include http module
 // var http = require('http'); 

//Node.js as a web server
/*http module can create an http server that listen to 
server ports and give a response back to client */
//use createServer() to create http server

var http = require('http');

//create a server object;
http.createServer(function(req,res){
    res.write("This is response to client"); //write response to client
    res.end(); //ending the response
}).listen(8080);