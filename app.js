const http = require("node:http");

const server = http.createServer((req,res)=>{
    res.write("hello world lol");
    res.end();
})

server.listen(8080);

console.log("hi")

