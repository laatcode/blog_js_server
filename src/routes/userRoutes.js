const router = require('express').Router()
const controller = require('../controllers/userController')
const response = require('../response')

router.post('/', (req, res) => {
    if(!req.is('application/json')) {
        return response.error(req, res, {message: "El contenido debe ser en formato JSON"})
    }

    controller.createUser(req.body.email, req.body.password, req.body.fullname)
        .then(data => response.success(req, res, data, 201))
        .catch(error => response.error(req, res, error, error.error && 500))
})

module.exports = router