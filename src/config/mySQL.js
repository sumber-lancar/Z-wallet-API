const mysql = require('mysql')

<<<<<<< HEAD
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DATABASE} = process.env
=======
const { MYSQL_HOST, MYSQL_USER, MYSQL_PASS, MYSQL_DATABASE } = process.env
>>>>>>> agung-auth

// koneksi ke db
const db = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USER,
    password: MYSQL_PASS,
    database: MYSQL_DATABASE
})

// cek koneksi ke db
db.connect((err) => {
    if (err) throw err;
    console.log('Database Connected');
})

module.exports = db