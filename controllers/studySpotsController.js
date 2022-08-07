const express = require('express')
const router = express.Router()
const StudySpot = require('../models/StudySpot')

// Routes: API Endpoints Supported
// GET all study spots (only needed for testing)
router.get('/', async (req, res, next) => {
    try {
        const studySpots = await StudySpot.find({})
        studySpots ? res.status(200).json(studySpots) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// export the routes
module.exports = router