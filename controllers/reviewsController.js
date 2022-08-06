const express = require('express')
const router = express.Router()

// there is no reviews model, so we use the study spot and user models instead
const StudySpot = require('../models/StudySpot')
const User = require('../models/User')

// Routes: API Endpoints Supported
// GET all reviews for a study spot
router.get('/:studySpotId', async (req, res, next) => {
    try {
        const studySpot = await StudySpot.findById(req.params.studySpotId)
        studySpot ? res.json(studySpot.reviews) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// POST new review for a study spot
router.post('/:studySpotId', async (req, res, next) => {
    try {
        const studySpot = await StudySpot.findById(req.params.studySpotId)
        if (studySpot) {
            studySpot.reviews.push(req.body)
            res.status(201).json(studySpot)
            // to save changes 
            return studySpot.save()
        }
        else {
            res.sendStatus(404)
        }
    }
    catch(err) {
        next(err)
    }
})

// PUT review for a study spot
router.put('/:studySpotId/:reviewId', async (req, res, next) => {
    try {
        const studySpot = await StudySpot.findById(req.params.studySpotId)
        if (studySpot) {
            studySpot.reviews.id(req.params.reviewId).set(req.body)
            res.sendStatus(204)
            return studySpot.save()
        }
        else {
            res.sendStatus(404)
        }
    }
    catch(err) {
        next(err)
    }
})

// DELETE review for a study spot
router.delete('/:studySpotId/:reviewId', async (req, res, next) => {
    try {
        const studySpot = await StudySpot.findById(req.params.studySpotId)
        if (studySpot) {
            studySpot.reviews.id(req.params.reviewId).remove()
            res.sendStatus(204) // 204 - no content
            return studySpot.save()
        }
        else {
            res.sendStatus(404)
        }
    }
    catch(err) {
        next(err)
    }
})


// export the routes
module.exports = router