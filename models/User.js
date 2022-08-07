const mongoose = require('mongoose')
const ReviewSchema = require('./Review')

// create the user schema 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true,
    // creating a virtual that will automatically remove password field any time toJSON method is used
    // even though the field is deleted by the virtual, it remains safe in the database
    toJSON: {
        virtuals: true,
        // ret is the returned Mongoose document
        transform: (_doc, ret) => {
            delete ret.password;
            return ret;
        },
    }
})

// instantiate the model and give it a name
const User = mongoose.model('User', UserSchema)

// export the model
module.exports = User