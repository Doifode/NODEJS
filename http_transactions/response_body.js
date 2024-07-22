// const http = require("http");

// http.createServer((req, res) => {
//     let body = [];
//     req.on("data", (chunk) => {
//         body.push(chunk);
//     }).on("end", () => {
//         body = Buffer.concat(body).toString();
//         console.log(body);
//         if (body) {
//             res.writeHead(200, {
//                 'Content-Type': 'application/json',
//                 'X-Powered-By': 'bacon',
//             });
//             res.write(body);
//             res.end();
//         } else {
//             res.statusCode = 500,
//                 res.end(JSON.stringify({ error: "Body not found", body }))
//         }

//     }).on("error", (err) => {
//         res.statusCode = 500,
//             res.write({ error: "Error" });
//     })

// }).listen(2000, () => {
//     console.log("Running on port 2000");
// });



const http = require('node:http');

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
        // BEGINNING OF NEW STUFF

        response.on('error', err => {
          console.error(err);
        });

        response.statusCode = 200;
        response.setHeader('Content-Type', 'application/json');
        // Note: the 2 lines above could be replaced with this next one:
        // response.writeHead(200, {'Content-Type': 'application/json'})

        const responseBody = { headers, method, url, body };

        response.write(JSON.stringify(responseBody));
        response.end();
        // Note: the 2 lines above could be replaced with this next one:
        // response.end(JSON.stringify(responseBody))

        // END OF NEW STUFF
      });
  })
  .listen(2000);
