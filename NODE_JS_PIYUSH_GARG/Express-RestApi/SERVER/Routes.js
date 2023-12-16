const express = require('express');
const ROUTE = express.Router();
const connection = require('../DB/DBConnection');

// get all users 
ROUTE.get('/', async (req, res) => {
    try {
        const users = await connection.find({});
        res.send(users)
    } catch (error) {
        console.log(error)
    }
})

ROUTE.get('/:id', async (req, res) => {
    try {
        const oneUser = await connection.findById(req.params.id);
        res.send(oneUser);
    } catch (error) {
        console.log(error)

    }
});
ROUTE.post('/postUser', async (req, res) => {
    try {
        const saveUSer = new connection(req.body);
        console.log(req.body)
        const savedUser = await saveUSer.save()
        res.send(savedUser)
    } catch (error) {
        console.log(error)

    }
})

module.exports = ROUTE
