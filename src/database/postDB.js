const db = require('./config').db

const getPosts = () =>
    db.connection.query('SELECT * FROM posts')
        .then(rows => rows[0])

const createPost = post =>
    db.connection.query('INSERT INTO posts SET ?', post)
        .then(result => result[0].insertId)

module.exports = {
    getPosts,
    createPost
}