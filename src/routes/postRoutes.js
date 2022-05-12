const router = require('express').Router()
const controller = require('../controllers/postController')
const response = require('../response')

router.get('/', (req, res) => {
    controller.getPosts()
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error, error.error && 500))
})

router.post('/', (req, res) => {
    if(!req.is('application/json')) {
        return response.error(req, res, {message: "El contenido debe ser en formato JSON"})
    }
    controller.createPost(req.body.title, req.body.content)
        .then(data => response.success(req, res, data, 201))
        .catch(error => response.error(req, res, error, error.error && 500))
})

router.patch('/:postId', (req, res) => {
    if(!req.is('application/json')) {
        return response.error(req, res, {message: "El contenido debe ser en formato JSON"})
    }
    controller.updatePost(req.params.postId, req.body.title, req.body.content)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error, error.error && 500))
})

router.delete('/:postId', (req, res) => {
    controller.deletePost(req.params.postId)
        .then(data => response.success(req, res, data))
        .catch(error => response.error(req, res, error, error.error && 500))
})

module.exports = router