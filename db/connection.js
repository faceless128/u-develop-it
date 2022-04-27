const mysql = require('mysql2');
var dotenv = require('dotenv');

// enviromnemt variables for database
dotenv.config();
var mysqlPass = process.env.MYSQL_PASS;

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username
        user: 'root',
        // Your MySQL password
        password: mysqlPass,
        database: 'election'
    },
);

module.exports = db;