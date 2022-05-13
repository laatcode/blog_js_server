const router = require('express').Router()
const controller = require('../controllers/authController')
const response = require('../response')

router.post('/login', (req, res) => {
    if(!req.is('application/json')) {
        return response.error(req, res, {message: "El contenido debe ser en formato JSON"})
    }

    controller.login(req.body.email, req.body.password)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error, error.error && 500))
})

module.exports = router