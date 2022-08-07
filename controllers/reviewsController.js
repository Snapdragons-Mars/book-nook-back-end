const express = require('express')
const router = express.Router()
// use requireToken as an inline middleware to ensure that user has a token before sending the response
// will automatically add the user to the req object as a property or will error out 
const { requireToken } = require('../middleware/auth')

const Review = require('../models/Review')

// Routes: API Endpoints Supported
// GET all reviews for a study spot
router.get('/studySpot/:studySpotId', requireToken, async (req, res, next) => {
    try {
        const reviews = await Review.find({}).populate('owner')
        const filteredReviewsArr = reviews.filter((review) => review.study_spot._id.toString() === req.params.studySpotId)
        filteredReviewsArr.length !== 0 ? res.status(200).json(filteredReviewsArr) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// GET all reviews for a user 
router.get('/user/:userId', requireToken, async (req, res, next) => {
    try {
        const reviews = await Review.find({}).populate('study_spot')
        const filteredReviewsArr = reviews.filter((review) => review.owner._id.toString() === req.params.userId)
        filteredReviewsArr.length !== 0 ? res.status(200).json(filteredReviewsArr) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// POST new review
router.post('/', requireToken, async (req, res, next) => {
    try {
        const newReview = await Review.create(req.body)
        res.status(201).json(newReview)
    }
    catch(err) {
        next(err)
    }
})

// PUT review
router.put('/:reviewId', requireToken, async (req, res, next) => {
    try {
        const updatedReview = await Review.findByIdAndUpdate(req.params.reviewId, req.body, {new: true})
        updatedReview ? res.status(200).json(updatedReview) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// DELETE review
router.delete('/:reviewId', requireToken, async (req, res, next) => {
    try {
        const deletedReview = await Review.findByIdAndDelete(req.params.reviewId)
        deletedReview ? res.sendStatus(204) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})


// export the routes
module.exports = router