// Basic config for server
require('dotenv').config() // knows what process.env.DATABASE_URL is
const express = require('express')
const app = express()
require('./db/connection') // check if db is running immediately
app.set('port', process.env.PORT || 8000)

// Implement cors to avoid cors error
const cors = require('cors')
app.use(cors())

// Middleware (parse thru data)
app.use(express.json())
app.use(express.urlencoded( {extended: true} ))

// Routes (controllers)
const usersController = require('./controllers/usersController')
app.use('/api/users', usersController)

const reviewsController = require('./controllers/reviewsController')
app.use('/api/reviews', reviewsController)

const studySpotsController = require('./controllers/studySpotsController')
app.use('/api/studySpots', studySpotsController)

// ERROR HANDLING
app.use((err, req, res, next) => {
    const statusCode = res.statusCode || 500
    const message = err.message || 'Internal Server Error'
    res.status(statusCode).send(message)
})

// Listener for requests / start the server
app.listen(app.get('port'), () => {
    console.log('on port: ' + app.get('port') + ' 🐧')
})