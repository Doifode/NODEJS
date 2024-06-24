const fs = require('node:fs');
const path = require("path");

const folderName = `${path.resolve()}/folders/example/yash`;

// here this code used to create folder but first we are checking it is available or not if its already present then it will not create if not it will create it.

try {
    if (!fs.existsSync(folderName)) {
        fs.mkdirSync(folderName);
    }
} catch (err) {
    console.error(err);
}

/*
Read the content of a directory
Use fs.readdir() or fs.readdirSync() or fsPromises.readdir() to read the contents of a directory.

This piece of code reads the content of a folder, both files and subfolders, and returns their relative path:
*/


fs.readdirSync(`${path.resolve()}/folders/example`).map((i) => {
    console.log(path.join(`${path.resolve()}/folders/example${i}`))
});



// You can also filter the results to only return the files, and exclude the folders:

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile();
};

fs.readdirSync(`${path.resolve()}/folders/example`)
    .map(fileName => {
        return path.join(`${path.resolve()}/folders/example`, fileName);
    })
    .filter(isFile);


//     Rename a folder
// Use fs.rename() or fs.renameSync() or fsPromises.rename() to rename folder. The first parameter is the current path, the second the new path:


// fsPromises.rename() is the promise-based version:

try {
    if (fs.existsSync(`${path.resolve()}/folders/example/example2`)) {
        fs.rename(`${path.resolve()}/folders/example/example2`, `${path.resolve()}/folders/example/example4`, err => {
            if (err) {
                console.error(err);
            }
            // done
        });
    }
} catch (error) {

}

// Remove a folder
// Use fs.rmdir() or fs.rmdirSync() or fsPromises.rmdir() to remove a folder.



try {
    if (fs.existsSync(`${path.resolve()}/folders/example/example2`)) {
        fs.rmdir(`${path.resolve()}/folders/example/example4`, err => {
            if (err) {
                throw err;
            }
            console.log(`${dir} is deleted!`);
        });
    }
} catch (error) {

}