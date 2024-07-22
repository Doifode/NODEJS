const http = require("http");


const server = http.createServer((req, res) => {
    let body = [];
    req
        .on('data', chunk => {
            body.push(chunk);
        })
        .on('end', () => {
            body = Buffer.concat(body).toString();
            console.log(JSON.parse(body));
            // at this point, `body` has the entire request body stored in it as a string
            res.end();

        }).on("error", err => {
            console.log(err.stack);
        })

});

server.listen(2000, () => {
    console.log("connected to server on port 2000");
})


http
    .createServer((request, response) => {
        const { headers, method, url } = request;
        let body = [];
        request
            .on('error', err => {
                console.error(err);
            })
            .on('data', chunk => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString();
                // At this point, we have the headers, method, url and body, and can now
                // do whatever we need to in order to respond to this request.
                console.log(body);
                if (body) {
                    response.end();
                } else {
                    response.statusCode = 500;
                    response.write
                }
            });
    })
    .listen(8080); // Activates this server, listening on port 8080.
///If we run this example, we'll be able to receive requests, but not respond to them. In fact, if you hit this example in a web browser, your request would time out, as nothing is being sent back to the client.

// So far we haven't touched on the response object at all, which is an instance of ServerResponse, which is a WritableStream. It contains many useful methods for sending data back to the client. We'll cover that next.