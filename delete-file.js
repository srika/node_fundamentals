var fs = require('fs');
//Asynchronous
fs.unlink('test.txt',function(err, data){
    if(err){
        throw err;
    }
    console.log('Successfully Deleted!');
})