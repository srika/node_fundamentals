var fs = require('fs');
//Asynchronous
fs.readFile('demo.txt',function(err, data){
    if(err){
        throw err;
    }
    console.log(data.toString());
})

//Synchronous
var dt = fs.readFileSync('demo.txt','utf8');
console.log(dt);