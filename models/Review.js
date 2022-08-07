const mongoose = require('mongoose')

// create the review schema 
const ReviewSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    comment:{
        type: String,
        required: true
    },
    noise_level_rating: {
        type: Number,
        required: true
    },
    outlets_rating: {
        type: Number,
        required: true
    },
    wifi_rating: {
        type: Number,
        required: true
    },
    aesthetic_rating: {
        type: Number,
        required: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    study_spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'StudySpot',
        required: true
    }
},
{
    timestamps: true
})

// instantiate the model and give it a name
const Review = mongoose.model('Review', ReviewSchema)

// export the model
module.exports = Review