var fs = require('fs');

fs.appendFile('appendUpdate.txt','Appends at the end of file', function(err)
{
    if(err) throw err;
    console.log("!UPDATED");
});