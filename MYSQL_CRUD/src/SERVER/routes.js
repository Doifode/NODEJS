const express = require('express');
const route = express.Router();
const connection = require('../DB/connection');

route.get('/employees', async (req, res) => {
    try {
        connection.query('select * from employees', (error, rows) => {
            if (error) {
                console.log(error)
            } else {
                res.send(rows)
            }
        });

    } catch (error) {
        res.send(error).status(500)

    }
})


route.get('/employee/:id', async (req, res) => {
    try {
        connection.query(`SELECT * from employees WHERE id =${req.params.id}`, (error, rows) => {
            if (error) {
                console.log(error);
            } else {
                res.send(rows)
            }
        });
    } catch (error) {
        console.log(error);
    }

})

route.delete('/deleteEmployee/:id', async (req, res) => {
    try {
        connection.query(`DELETE from employees WHERE id=${req.params.id}`, (error, rows) => {
            if (error) {
                console.log(error);
            } else {
                res.send("deleted successfully !")
            }
        })

    } catch (error) {
        console.log(error);

    }
})

route.post('/addEmployee', (req, res) => {
    const data = req.body
    connection.query(`INSERT INTO employees(name,salary) values("${data.name}",${data.salary})`,
        (error, rows) => {
            if (error) {
                console.log(error)
            }
            else {
                res.send(rows)
            }
        })
})

route.patch("/updateEmployee", (req, res) => {
    const { id } = req.body;
    const data = req.body
    connection.query(`update employees set ? where id =${id}`, [data], (error, rows) => {
        if (error) {
            console.log(error)
        } else {
            res.send(rows)
        }
    })
})
module.exports = route;
