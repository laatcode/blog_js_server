const db = require('./config').db

const getPosts = () =>
    db.connection.query('SELECT * FROM posts')
        .then(rows => rows[0])

module.exports = {
    getPosts
}