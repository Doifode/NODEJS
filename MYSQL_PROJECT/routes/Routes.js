const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const DbConnector = require('../config/DbConnection')

const Route = express.Router();

Route.get("/", (req, res) => {
    res.send('hi its working ')
})


// REGISTER USER ROUTE

Route.post('/addUser', async (req, res) => {
    const { username, password, email, firstname, lastname } = req.body;

    const encryptPass = await bcrypt.hash(password, 8)

    DbConnector.query(
        `SELECT email ,username from user where username="${username}" OR email="${email}"`,
        (error, row) => {
            if (error) {
                res.send(error);
            }

            if (row[0]?.username == username) {
                res.send({ message: 'username already exist', status: false }).status(400)
            }
            else if (row[0]?.email == email) {
                res.send({ message: 'email already exist', status: false }).status(400)
            }
            else {
                DbConnector.query(`INSERT INTO user(firstname,username,lastname,password,email) 
                VALUES("${firstname}","${username}","${lastname}","${encryptPass}","${email}")`,
                    (error) => {
                        if (error) {
                            res.status(500).send(error)
                        } else {
                            res.send({ message: 'added successfully', status: true }).status(200)
                        }
                    })
            }
        });
});



Route.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const bcryptPass = await bcrypt.hash(password, 8);
    DbConnector.query(`SELECT * FROM  user where username="${username}" `,
        (error, result) => {
            if (error) {
                res.send(error)
            }
            if (result[0]?.username?.length < 0) {
                res.send({ message: "Invalid Username", status: false }).status(400);
                console.log(result)

            } else if (result[0]?.username?.length > 0) {
                res.send({ message: "successfully login", status: true }).status(200);
                console.log(result)

            }
        })


})


module.exports = Route