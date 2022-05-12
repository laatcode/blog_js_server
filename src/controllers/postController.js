const postDB = require('../database/postDB')

const getPosts = () => new Promise((resolve, reject) => {
    postDB.getPosts()
        .then(data => resolve(data))
        .catch(error => reject({
            message: 'Ha ocurrido un error a obtener la lista de post',
            error
        }))
})

module.exports = {
    getPosts
}