const mongoose = require('mongoose')

// create the review schema 
const ReviewSchema = new mongoose.Schema({

})

// instantiate the model and give it a name
const Review = mongoose.model('Review', ReviewSchema)

// export the model
module.exports = Review