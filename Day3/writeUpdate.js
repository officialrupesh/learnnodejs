var fs = require('fs');

fs.writeFile('writeUpdate.txt', 'Now content is updated ', function(err){
    if(err) throw err;
    console.log("!UPDATED");
});