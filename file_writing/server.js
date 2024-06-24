import fs from 'fs' 
import path from "path"
const content = 'console.log(Hii its okay to be nice ! )';

const currentPath = path.resolve();
// fs.writeFile(`${currentPath}/file_writing/yash.js`, content, { flag: "a+" }, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // file written successfully
//   }
// });


//Writing a file synchronously
// Alternatively, you can use the synchronous version fs.writeFileSync():

// try {
//     fs.writeFileSync(`${currentPath}/file_writing/yashDoifode.js`, { flag: "a+" }, content);
//   // file written successfully
// } catch (err) {
//   console.error(err);
// }

 /*
 
Appending content to a file
Appending to files is handy when you don't want to overwrite a file with new content, but rather add to it.

Examples
A handy method to append content to the end of a file is fs.appendFile() (and its fs.appendFileSync() counterpart):

 */
// fs.appendFile(`${currentPath}/file_writing/yashDoifode.js`, content, err => {
//   if (err) {
//     console.error(err);
//   } else {
//     // done!
//   }
// });
