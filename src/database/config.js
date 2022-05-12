require('dotenv').config()
const mysql = require('mysql2/promise')

const db = {}

const connect = async () => {
    mysql.createConnection({
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        user: process.env.DB_USER,
        password: process.env.DB_PASS
    }).then(connection => {
        db.connection = connection
        console.log(`DB Connect Succesfulled`)
    }).catch(error => {
        console.error(`DB Error: Error al conectar a la base de datos. ${error}`)
        process.exit(1)
    })
}

module.exports = {
    db,
    connect
}