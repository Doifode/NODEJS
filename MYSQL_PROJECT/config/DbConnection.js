const { DBNAME, PASSWORD, DBHOST, USER } = process.env;

const MySql = require('mysql');

const SqlConnect = MySql.createConnection({
    host: DBHOST,
    user: USER,
    password: PASSWORD,
    database: DBNAME,
})

SqlConnect.connect((err) => {
    if (err) { console.log(err) }
    else {
        console.log('connected with sql' + " " + DBNAME)
    }
});

module.exports = SqlConnect