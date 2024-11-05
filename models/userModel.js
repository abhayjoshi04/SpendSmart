const mongoose = require('mongoose');
const colors = require('colors');


//schema design
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide your name']
    },
    email: {
        type: String,
        required: [true, 'Please provide your unique email'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please provide your password']
    }
    
},{timestamps: true}
);

//model
const userModel = mongoose.model('users', userSchema);
module.exports = userModel;