exports.success = (req, res, message, status = 200) => res.status(status).json({
    body: message,
    error: ''
})

exports.error = (req, res, error, status = 400) => {
    if(error.error) {
        console.error(error.error.message)
    }

    res.status(status).json({
        body: '',
        error: error.message
    })
}