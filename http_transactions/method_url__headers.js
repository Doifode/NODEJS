// When handling a request, the first thing you'll probably want to do is look at the method and URL, so that appropriate actions can be taken. Node.js makes this relatively painless by putting handy properties onto the request object.

const http = require("http");

// the request object is the instance of the IncomingMessages from user.
// The method here will always be a normal HTTP method/verb. The url is the full URL without the server, protocol or port. For a typical URL, this means everything after and including the third forward slash.
// Headers are also not far away. They're in their own object on request called headers.

const server = http.createServer((req, res) => {
    const { url, method ,headers ,rawHeaders} = req;
    console.log("server is running on port 2500 !", url, method,headers["user-agent"]);
})

// It's important to note here that all headers are represented in lower-case only, regardless of how the client actually sent them. This simplifies the task of parsing headers for whatever purpose.

// If some headers are repeated, then their values are overwritten or joined together as comma-separated strings, depending on the header. In some cases, this can be problematic, so rawHeaders is also available.

server.listen(2500,()=>{
    console.log('server connected !')
})