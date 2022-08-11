// const express = require('express')
// const router = express.Router()
// const StudySpot = require('../models/StudySpot')

// // Routes: API Endpoints Supported
// // GET all study spots (only needed for testing)
// router.get('/', async (req, res, next) => {
//     try {
//         const studySpots = await StudySpot.find({})
//         studySpots ? res.status(200).json(studySpots) : res.sendStatus(404)
//     }
//     catch(err) {
//         next(err)
//     }
// })

// // GET one study spot
// router.get('/:studySpotId', async (req, res, next) => {
//     try {
//         const studySpot = await StudySpot.findById(req.params.studySpotId)
//         studySpot ? res.status(200).json(studySpot) : res.sendStatus(404)
//     }
//     catch(err) {
//         next(err)
//     }
// })

// // POST create/add a study spot from google maps API when a review is written
// // If study spot already has a review, send existing study spot (GET)
// // otherwise, create new study spot (POST)
// router.post('/', async (req, res, next) => {
//     try {
//         const newStudySpot = await StudySpot.create(req.body)
//         res.status(201).json(newStudySpot)
//     }
//     catch(err) {
//         next(err)
//     }
// })

// // DELETE a study spot
// // If all reviews are deleted for a study spot, it may deleted from the database
// router.delete('/:studySpotId', async (req, res, next) => {
//     try {
//         const deletedStudySpot = await StudySpot.findByIdAndDelete(req.params.studySpotId)
//         deletedStudySpot ? res.sendStatus(204) : res.sendStatus(404)
//     }
//     catch(err) {
//         next(err)
//     }
// })

// // export the routes
// module.exports = router