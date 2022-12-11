const http = require('http');

http.createServer((req,res)=>{
    res.write("Hello World123!");
    res.end();
}).listen(8000,()=> console.log("Server running.."));