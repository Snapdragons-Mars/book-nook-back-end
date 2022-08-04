const mongoose = require('mongoose')

// create the user schema 
const UserSchema = new mongoose.Schema({

})

// instantiate the model and give it a name
const User = mongoose.model('User', UserSchema)

// export the model
module.exports = User