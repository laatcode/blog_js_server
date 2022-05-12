require('dotenv').config()
const express = require('express')
const routes = require('./routes/routes')
const dbConnect = require('./database/config').connect
const notFound = require('./middlewares/notFound')

const app = express()
const PORT = process.env.PORT || 5000

dbConnect()
routes(app)

app.use(notFound)

app.listen(PORT, () => console.log(`Server running at port ${PORT}`))