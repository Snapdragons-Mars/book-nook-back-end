const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcrypt')
// require the createUserToken method
const { createUserToken } = require('../middleware/auth')

// Routes: API Endpoints Supported
// GET all users (only needed for testing)
router.get('/', async (req, res, next) => {
    try {
        const users = await User.find({})
        users ? res.status(200).json(users) : res.sendStatus(404)
    }
    catch(err) {
        next(err)
    }
})

// GET one user (only needed for testing)
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
        // get the password, hash, then store the hashed password in the db only
        // 10 rounds of salt (standard)
        const password = await bcrypt.hash(req.body.password, 10)
        const newUser = await User.create({name: req.body.name, email: req.body.email, password, reviews: req.body.reviews})
        res.status(201).json(newUser)
    }
    catch(err) {
        next(err)
    }
})

// POST one user (sign in)
router.post('/signin', async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (user) {
            const token = createUserToken(req, user)
            res.json({token})
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