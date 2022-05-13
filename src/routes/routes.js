const postRoutes = require('./postRoutes')
const userRoutes = require('./userRoutes')
const authRoutes = require('./authRoutes')

const routes = (server) => {
    server.use('/api/posts', postRoutes)
    server.use('/api/users', userRoutes)
    server.use('/api/auth', authRoutes)
}

module.exports = routes