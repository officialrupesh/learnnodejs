var fs = require('fs');

fs.rename('ren.txt','renamed.txt',function(err)
{
    if(err) throw err;
    console.log("File name renamed!!");
})