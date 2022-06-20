//Node.js is perfect for event-driven applications.

// Event in Node.js
/* Every action on a computer is an event. Like when a connection 
is made or a file is opened.
Objects in Node.js can fire events, like the readStream object fires
events when opening and closing a file.


Example:
*/

var fs = require('fs');
/* createReadStream() allows you to open up a readable stream 
in a very simple manner. All you have to do is pass the
path of the file to start streaming in.
*/
  var rs = fs.createReadStream('./demofile.txt'); 
rs.on('open', function(){
    console.log('The file is open');
});