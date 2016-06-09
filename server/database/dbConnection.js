'use strict';

var mySql = require('mysql');

var dbConnection = mySql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'a1node'
});

module.exports = dbConnection;