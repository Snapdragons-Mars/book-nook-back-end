const express = require('express')
const router = express.Router()
const User = require('../models/User')

// Routes: API Endpoints Supported
// GET one user 
router.get('/:userId', async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        user ? res.status(200).json(user) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// POST one user (sign up)
router.post('/signup', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    }
    catch(err) {
        next(err)
    }
})

// POST one user (sign in)
router.post('/signin', async (req, res, next) => {
    try {
        const newUser = await User.create(req.body)
        res.status(201).json(newUser)
    }
    catch(err) {
        next(err)
    }
})

// export the routes
module.exports = router