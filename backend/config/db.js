const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Willshe25",
    database: "taskflow"
});

module.exports = connection;