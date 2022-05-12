const response = require('../response')

const notFound = (req, res) => {
    response.error(req, res, {message: `Ruta ${req.originalUrl} no existe`})
}

module.exports = notFound