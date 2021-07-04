const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const cors = require('cors')
const path = require('path')
const dotenv = require('dotenv')

const logger = require('./logger')
const authorize = require('./authorize')
const router = require('./routers/index.router')
const db = require('./resource/config/db')

db.connect()
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors())

// Http logger
// app.use(morgan('combined'))
app.use([logger, authorize])

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

router(app)

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})