const postDB = require('../database/postDB')

const getPosts = () => new Promise((resolve, reject) => {
    postDB.getPosts()
        .then(data => resolve(data))
        .catch(error => reject({
            message: 'Ha ocurrido un error a obtener la lista de posts',
            error
        }))
})

const createPost = (title, content) => new Promise((resolve, reject) => {
    if(!title || !content) {
        return reject({
            message: 'Datos incompletos'
        })
    } else {
        const dateTime = new Date()

        const post = {
            title,
            content,
            created_at: dateTime,
            updated_at: dateTime
        }

        postDB.createPost(post)
            .then(id =>
                resolve({
                    id,
                    ...post
                })
            ).catch(error =>
                reject({
                    message: "Ha ocurrido un error al crear el post",
                    error
                })
            )
    }
})

module.exports = {
    getPosts,
    createPost
}