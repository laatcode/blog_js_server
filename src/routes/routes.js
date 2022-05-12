const postRoutes = require('./postRoutes')

const routes = (server) => {
    server.use('/api/posts', postRoutes)
}

module.exports = routes