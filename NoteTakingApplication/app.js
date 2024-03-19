const http = require('http')
const fs = require('fs')
const request = require("request");

request.get({ url: "https://jsonplaceholder.typicode.com/posts" },
    (error, res) => {
        // const data = JSON.parse(res);
        console.log(res);

        // fs.writeFileSync('posts.json',JSON.stringify(res))

    })

// const server = http.createServer().listen(2304, () => console.log('server running on port 2304 !'));


