const db = require('../database/config').db

const createUser = user =>
    db.connection.query('INSERT INTO users SET ?', user)
        .then(rows => rows[0])

const login = email =>
    db.connection.query('SELECT id, email, fullname, password FROM users WHERE email = ?', email)
        .then(rows => rows[0][0])

module.exports = {
    createUser,
    login
}