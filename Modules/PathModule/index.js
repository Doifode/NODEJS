const path = require('path');
const a = path.basename('C:\\temp\\myfile.html');
// returns the base name of the path (myfile.html) 
console.log(a)
const b = path.dirname('C:\\temp\\myfile.html');
//returns the directory name of the file (c:\temp)
console.log(b)
const  c = path.extname('C:\\temp\\myfile.html');
// returns the extension used in the file ().html)
console.log(c)
