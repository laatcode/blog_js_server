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

const updatePost = (id, title, content) => new Promise((resolve, reject) => {
    if(!id || !title || !content) {
        return reject({
            message: 'Datos incompletos'
        })
    }

    const dateTime = new Date()

    const post = {
        id,
        title,
        content,
        updated_at: dateTime
    }

    postDB.updatePost(post)
        .then(result => {
            if(result.changedRows === 1) {
                return resolve(`Post ${id} actualizado con éxito`)
            } else {
                return reject({
                    message: `Ha ocurrido un error al actualizar el post ${id}, por favor valide los datos e intente nuevamente`
                })
            }
        }).catch(error => reject({
            message: `Ha ocurrido un error al actualizar el post ${id}`,
            error
        }))
})

module.exports = {
    getPosts,
    createPost,
    updatePost
}