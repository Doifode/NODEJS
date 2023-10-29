const fs = require('fs');
// fs module are used to create file ,add data into file ,read data into file,write data into file

const a = fs.writeFile("yash.html", "<h1>hii its yash</h1>", () => {
    console.log('file added successfully');
});
// this function is asynchronous thats why we use callback function here

const b = fs.writeFileSync("yash1.html", "<h1>hii its yash</h1>");
// this will handle asynchronous call by its own

// that both are for creating file ans writing data into it


//--------------------- read data from file ------------------------

fs.readFile('yash1.html', "utf-8", (err, data) => {
    console.log(data)
})

// this function are used to read the data from file 

fs.appendFile('yash1.html', 'yash vinod doifode',
    (err, data) => {
        console.log(data)
    })
//this function are used to update the file or add more data into it

fs.unlinkSync('yash.html');
// this funciton is used to  delete file 
