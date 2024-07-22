const http = require("http");

http.createServer((request, response) => {

    request.on('error', err => {
        console.error(err);
        response.statusCode = 400;
        response.end();
    });
    response.on('error', err => {
        console.error(err);
    });

    let userData = [{ name: "yash", age: "23", mobile: "8080494027" }, { name: "om", age: "21", mobile: "8669116766" }];
    let body = []


    if (request.method === "GET" && request.url === "/") {
        response.end(JSON.stringify({ data: userData, success: true }))
    }

    if (request.method === "POST" && request.url === "/add") {
        request.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            body = Buffer.concat(body).toString();
            if (body) {
                userData = [...userData, JSON.parse(body)];
                response.end(JSON.stringify({ data: userData, message: "User added successfully !", success: true }));
            } else {
                response.end(JSON.stringify({ data: userData, message: "Body not found !", success: false }))
            }
        }).on("error", () => {
            response.end(JSON.stringify({ data: [], success: false }));
        })
    }

    if (request.method === "PUT" && request.url === "/update") {
        request.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            body = Buffer.concat(body).toString();
            if (body) {
                const parsedBody = JSON.parse(body);
                userData = userData.map((i) => {
                    if (i.name === parsedBody.name) {
                        return parsedBody
                    }
                    return i
                })
                response.end(JSON.stringify({ data: userData, message: "User added successfully !", success: true }));
            } else {
                response.end(JSON.stringify({ data: userData, message: "Body not found !", success: false }))
            }
        }).on("error", () => {
            response.end(JSON.stringify({ data: [], success: false }));
        })
    }

    if (request.method === "DELETE" && request.url === "/delete") {
        request.on("data", (chunk) => {
            body.push(chunk);
        }).on("end", () => {
            body = Buffer.concat(body).toString();
            if (body) {
                const parsedBody = JSON.parse(body);
                const index = userData.findIndex((i) => i.name == parsedBody.name)
                userData.splice(index, 1)
                response.end(JSON.stringify({ data: userData, message: "User added successfully !", success: true }));
            } else {
                response.end(JSON.stringify({ data: userData, message: "Body not found !", success: false }))
            }
        }).on("error", () => {
            response.end(JSON.stringify({ data: [], success: false }));
        })
    }

}).listen(2304, () => {
    console.log("Server is connected and running on 2304 !")
});