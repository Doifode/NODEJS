const fs = require('node:fs');

fs.writeFileSync('file.md',"yash"); // blocks here until file is read

fs.readFileSync('./file.md'); // synchronous file reading

// asynchronous file reading so handling the through callback
fs.readFile('./file.md', (err, data) => {
  if (err) throw err;
});
 
// The first example appears simpler than the second but has the disadvantage of the second line blocking the execution of any additional JavaScript until the entire file is read. Note that in the synchronous version if an error is thrown it will need to be caught or the process will crash. In the asynchronous version, it is up to the author to decide whether an error should throw as shown.


//-----------------------------------------
const moreWork =()=>{
    console.log('moreNetwork')
}

// const data = fs.readFileSync('./file.md'); // blocks here until file is read
// console.log(data);
// moreWork();





fs.readFile('./file.md', (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork(); // will run before console.log