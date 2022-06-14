var fs = require('fs');

fs.unlink('deletefile.txt', function (err){
    if(err) throw err;
    console.log("File found and deleted");
});

//AS NO SUCH DIRECTORY OR FILE ARE THERE IN THE FOLDER. THIS  WILL THROW A ERROR
//create a file with name deletefile.txt to let it work