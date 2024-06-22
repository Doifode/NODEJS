const path = require("path");

const server = "./example/info.js";

console.log(path.dirname(server));
console.log(path.basename(server));
console.log(path.extname(server));
console.log(path.basename(server, path.extname(server)));

// You can join two or more parts of a path by using path.join():
const name = 'joe';
const fullPath = path.join('/', 'users', name, 'notes.txt'); // '/users/joe/notes.txt'
console.log(fullPath);

// You can get the absolute path calculation of a relative path using

// const absolutePath = path.resolve("server.js");
// const absolutePath = path.resolve("tmp", "server.js");
const absolutePath = path.resolve("/tmp", "server.js");
console.log(absolutePath);

// In this case Node.js will simply append /joe.txt to the current working directory. If you specify a second parameter folder, resolve will use the first as a base for the second:

const normalizedPath = path.normalize('/users/joe/..//test.txt'); 
console.log(normalizedPath);