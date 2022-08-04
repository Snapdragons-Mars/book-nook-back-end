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

// Listener for requests
app.listen(app.get('port'), () => {
    console.log('on port: ' + app.get('port') + ' 🐧')
})