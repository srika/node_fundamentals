var fs = require('fs');
//Asynchronous
fs.appendFile('test.txt',' Lets learn file system operations!',function(err, data){
    if(err){
        throw err;
    }
    console.log('append Opertaion Completed');
})