var fs = require('fs');

fs.appendFile('appendUpdate.txt','Lets see if it adds', function(err)
{
    if(err) throw err;
    console.log("!UPDATED");
});