const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    database: 'testing',
    user: 'root',
    password: 'Hoathuongso1',
})

connection.connect(function (err) {
    if (err) {
        throw err
    } else {
        console.log('Msyql conenction succession fully');
    }
})

module.exports = connection;