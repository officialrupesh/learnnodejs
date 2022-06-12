// //require() function is used to include a module with name of module
// // example:
//  var http = require('http'); 
// //this means our application now have access to http module, and is able to create a server
// http.createServer(function (req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
// }).listen(8080);