//creating a node js server

const http = require('http');
const routes = require('./routes');

//const fs = require('fs');
const server = http.createServer(routes);
    //console.log(req.method, req.headers, req.url);
    // const url = req.url;
    // const method = req.method;

server.listen(3005);