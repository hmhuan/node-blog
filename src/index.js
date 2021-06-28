const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const path = require('path')
const logger = require('./logger')
const authorize = require('./authorize')

const app = express()
const PORT= 5000

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

// Http logger
// app.use(morgan('combined'))
app.use([logger, authorize])

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}))
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
    res.render('home')
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
