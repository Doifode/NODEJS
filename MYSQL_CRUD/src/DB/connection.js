const MySql = require('mysql');

const MySqlConnection = MySql.createConnection({
    host: "localhost",
    user: "root",
    password: "Yash@2304",
    database: "node_db"

});
//mysql configuration with local db
const connection = MySqlConnection.connect((error) => {
    if (error) return console.log(error)
    else return console.log('connected successfully !')
});
//mysql creation of connection 

module.exports = MySqlConnection
