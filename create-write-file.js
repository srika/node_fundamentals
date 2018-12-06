var fs = require('fs');
//Asynchronous
fs.writeFile('test.txt','Hello World!',function(err, data){
    if(err){
        throw err;
    }
    console.log('Write Opertaion Completed');
})