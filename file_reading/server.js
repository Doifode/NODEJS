const fs = require("fs");
const path = require('path')
/*
Reading files with Node.js
The simplest way to read a file in Node.js is to use the fs.readFile() method, passing it the file path, encoding and a callback function that will be called with the file data (and the error):
*/ 

// ALTERNATIVELY YOU CAN USE THIS ONE ALSO 
try {
      fs.readFileSync(`${path.resolve()}/file_reading/first/info.html`, 'utf-8', async (err, data) => {
        console.log(data);
          console.log(err)
    });
} catch (error) {
    console.log(error) 
}

try {
    fs.readFile(`${path.resolve()}/file_reading/first/info.html`, 'utf8', async (err, data) => {
        console.log(data)
    });
} catch (error) {
    console.log(error)
}

/*
All three of fs.readFile(), fs.readFileSync() and fsPromises.readFile() read the full content of the file in memory before returning the data.

This means that big files are going to have a major impact on your memory consumption and speed of execution of the program.

In this case, a better option is to read the file content using streams.
*/