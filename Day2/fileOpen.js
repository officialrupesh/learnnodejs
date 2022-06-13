var fs = require('fs');

/* Syntax 
fs.open('textfilename','flag',function (err,file))  flag means w for writing 
*/
fs.open('textwrite.txt','w', function(err,file){
    if(err) throw err;
    console.log('Saved!');
});