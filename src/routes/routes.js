const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')

const routes = (server) => {
    server.use('/api/posts', postRoutes)
    server.use('/api/users', userRoutes)
}

module.exports = routes