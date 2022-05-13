const db = require('../database/config').db

const createUser = user =>
    db.connection.query('INSERT INTO users SET ?', user)
        .then(rows => rows[0])

module.exports = {
    createUser
}