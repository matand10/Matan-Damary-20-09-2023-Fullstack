var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'weather_db',
    insecureAuth: true
});

connection.connect((err: Error) => {
    if (err) throw new Error('mySql failed connection');
    console.log('connected to SQL server');
})


function runSQL(sqlCommand: string) {
    return new Promise((resolve, reject) => {
        connection.query(sqlCommand, function (error: Error, results: Array<any>) {
            if (error) reject(error);
            else resolve(results);
        });
    })
}

// connection.end();
module.exports = {
    runSQL
}