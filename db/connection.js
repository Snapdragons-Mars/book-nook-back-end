const mongoose = require('mongoose')

const mongoURI = process.env.DATABASE_URL
const db = mongoose.connection

// connect to mongoDB with mongoURI
mongoose.connect(mongoURI)

db.on('error', (err) => console.log(err.message))
db.on('connected', () => console.log('mongo connected at: ', mongoURI))
db.on('disconnected', () => console.log('mongo disconnected'))

db.on('open', () => {
    console.log('mongo connection made ✅')
})

module.exports = mongoose