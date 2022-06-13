var fs = require('fs');

fs.appendFile('nofile.txt','This creates a new file if file doesnt exist already',function (err)
{
    if(err) throw err;
    console.log('Saved!');
});