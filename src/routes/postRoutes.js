const router = require('express').Router()
const controller = require('../controllers/postController')
const response = require('../response')

router.get('/', (req, res) => {
    controller.getPosts()
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error, 500))
})

module.exports = router