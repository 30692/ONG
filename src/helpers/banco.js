const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    user: 'root',
    password: '1234',
    database: 'ong'
});
// con.query = util.promisify(con.query);
module.exports = con;