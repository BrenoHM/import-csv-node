import mysql from 'mysql';

const connection = mysql.createConnection({
    host     : 'localhost',
    database : 'imports',
    user     : 'root',
    password : '',
});

connection.connect(function(err) {
    if (err) {
        console.error('Error connecting: ' + err.stack);
        return;
    }

    console.log('Connected as id ' + connection.threadId);
});

export default connection;