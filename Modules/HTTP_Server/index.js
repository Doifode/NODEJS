const http = require('http');
http.createServer((req, res) => {
    if (req.url == "/") {
        res.end("home page")
    }
    if (req.url == "/about") {
        res.end("about page")
    }
}).listen(30000, () => {
    console.log('hiii')
})

