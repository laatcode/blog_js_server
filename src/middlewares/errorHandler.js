const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    res.json({
        route: req.originalUrl,
        method: req.method,
        message: err.message,
        stack: process.env.ENV === 'production' ? null : err.stack,
    })
 }

 module.exports = errorHandler