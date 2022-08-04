const mongoose = require('mongoose')

// create the study spot schema 
const StudySpotSchema = new mongoose.Schema({

})

// instantiate the model and give it a name
const StudySpot = mongoose.model('StudySpot', StudySpotSchema)

// export the model
module.exports = StudySpot