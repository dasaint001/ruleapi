const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//  User Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    
    github: {
        type: String,
        required: true
    },
    
    email: {
        type: String,
        required: true,
        unique: true
    },

    mobile: {
        type: String,
        required: true,
    },

    twitter: {
        type: String
    }

});

module.exports = mongoose.model('User', UserSchema);