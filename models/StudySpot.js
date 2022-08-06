const mongoose = require('mongoose')
const ReviewSchema = require('./Review')

// create the study spot schema 
const StudySpotSchema = new mongoose.Schema({
    overall_rating: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    google_id: String,
    reviews: [ReviewSchema]
},
{
    timestamps: true
})

// instantiate the model and give it a name
const StudySpot = mongoose.model('StudySpot', StudySpotSchema)

// export the model
module.exports = StudySpot