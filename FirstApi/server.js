const http = require('http')
const fs = require('fs');

http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("home page");
    }
    if (req.url == "/about") {
        res.end(fs.readFileSync('jsondata.json', 'utf-8'))
    }
}).listen(30000, () => {
    console.log('hiiii')
}) 
