const mysql = require('mysql');

const conex = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password:'admin',
    database:'db_toDo',
    multipleStatements: true
});

module.exports = conex;