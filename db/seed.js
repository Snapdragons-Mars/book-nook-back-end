// establish connection to MongoDB
const mongoose = require('./connection')
// require the seed data (for the study spots to placehold for Google places)
// const studySpots = require('./studySpots.json')

const User = require('../models/User')
const Review = require('../models/Review')

// Delete any existing documents in the Review collection
User.deleteMany({})
    .then(() => Review.deleteMany({}))
    // log the successful results
    .then(console.log)
    // log any errors if things didn't work
    .catch(console.error)
    // use finally so that this code will run whether or not
    // things worked and close our connection to the database
    .finally(() => {
        process.exit()
    })