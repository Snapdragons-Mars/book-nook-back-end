// establish connection to MongoDB
const mongoose = require('./connection')
// require the data 
const seedData = require('./seeds.json')

const StudySpot = require('../models/StudySpot')
// const User = require('../models/User')

// Delete any existing documents in the Review collection
StudySpot.deleteMany()
    // use insertMany and pass in the seed data
    .then(() => StudySpot.insertMany(seedData))
    // log the successful results
    .then(console.log)
    // log any errors if things didn't work
    .catch(console.error)
    // use finally so that this code will run whether or not
    // things worked and close our connection to the database
    .finally(() => {
        process.exit()
    })