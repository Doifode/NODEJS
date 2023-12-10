const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yash@2304"
})

connection.connect((err) => {
    if (err) throw err;
    console.log("Connected");

    connection.query("CREATE DATABASE NODE_DB", (err, result) => {
        if (err) throw err;
        console.log("Database created")

    })

})