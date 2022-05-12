const db = require('./config').db

const getPosts = () =>
    db.connection.query('SELECT * FROM posts')
        .then(rows => rows[0])

const createPost = post =>
    db.connection.query('INSERT INTO posts SET ?', post)
        .then(result => result[0].insertId)

const updatePost = post =>
    db.connection.query('UPDATE posts SET ? WHERE id = ?', [post, post.id])
        .then(result => result[0])

const deletePost = postId =>
    db.connection.query('DELETE FROM posts WHERE id = ?', postId)
        .then(result => result[0])

module.exports = {
    getPosts,
    createPost,
    updatePost,
    deletePost
}