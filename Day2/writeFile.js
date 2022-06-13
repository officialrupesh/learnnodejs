var fs = require('fs');

fs.writeFile('writeFile.txt','Writing a new file using fs.writeFile', function(err){
    if(err) throw err;
    console.log("Created! ");
})