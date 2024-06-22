/*

Working with file descriptors in Node.js
Before you're able to interact with a file that sits in your filesystem, you must get a file descriptor.

A file descriptor is a reference to an open file, a number (fd) returned by opening the file using the open() method offered by the fs module. This number (fd) uniquely identifies an open file in operating system:

Notice the r we used as the second parameter to the fs.open() call.

That flag means we open the file for reading.

Other flags you'll commonly use are:
*/
const fs = require("fs/promises");
const path = require('path');
console.log(path.resolve())
 
const example = async () => {
    const fileHandle = await fs.open(`${path.resolve()}/file_descriptors/example/first/info1`, "r");
    console.log(await fileHandle.readFile({ encoding: 'utf8' }));
}

example(); 