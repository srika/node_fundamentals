var http = require('http');

var server = http.createServer(function(req, res){
    //handling incoming requests
    //res.write('Hello World');
    //res.end();
    if(req.url == '/'){
       res.writeHead(200,{'content-type':'text/html'});
       res.write('<h1>This is home page</h1>');
       res.end(); 
    }
    else if(req.url == '/user'){
        res.writeHead(200,{'content-type':'text/plain'});
        res.write('<p>This is user page</p>');
        res.end(); 
    }
    else if(req.url == '/admin'){
        res.write('This is admin page');
        res.end(); 
    }
    else if(req.url == '/data'){
        res.writeHead(200,{'content-type':'application/json'});
        res.write(JSON.stringify({"message":"Hello World"}));
        res.end(); 
    }
    else{
        res.write('Invalid Request');
        res.end();
    }
});

server.listen(3000);
console.log("server is running at port 3000");