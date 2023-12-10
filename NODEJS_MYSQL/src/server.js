// const express = require('express');
// const mysql = require("mysql");
// const app = express()

// const connection = mysql.createConnection({
//     host: "localhost",
//     user: 'root',
//     password: "Yash@2304",
//     insecureAuth: true,
//     database: "practice_db_1"
// })

// app.get('/student', (req, res) => {
//     const sql = "SELECT * FROM books limit 5";
//     connection.query(sql, (err, data) => {
//         if (err) throw err;

//         return res.send(data)


//     })
// })
// app.listen(2001, () => { console.log('connectedd') })


// code to fetch books records



const MYSQLDB = require('./MYSQLDB');