const http = require("http");

/*
Create the Server
Any node web server application will at some point have to create a web server object. This is done by using createServer.
*/

const server = http.createServer((req, res) => {
    console.log("server is running on port 2000 !")
});

// The Call Back function which passed to the server will called for every http request thats made against the server.
// So its called as a request handler 
// In fact the server object returned by the createServer is an EventEmitter  

server.listen(2000, () => {
    console.log('server is connected 1 !')
})

const server2 = http.createServer();

server2.on("request", (req, res) => {
    console.log("server is running  on port 2500 !");
});

server2.listen(2500, () => {
    console.log("server is connected 2 !")
});

// When an HTTP request hits the server, node calls the request handler function with a few handy objects for dealing with thr transaction request and response.

//In order to actually serve requests, the listen method needs to be called on the server object. In most cases, all you'll need to pass to listen is the port number you want the server to listen on. There are some other options too, so consult the API reference.

