const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    userid: {
        type: String,
        required: [true],
    },
    type: {
        type: String,
        //enum: ['income', 'expense'],
        required: [true, 'Please enter the type'],
    },
    amount: {
        type: Number,
        required: [true, 'Please enter the amount'],
    },
    category: {
        type: String,
        required: [true, 'Please enter the category'],
    },
    description: {
        type: String,
        required: [true, 'Please enter the description'],
    },
    date: {
        type: Date,
        default: Date.now,
    },
}, {timestamps: true}
);

const transactionModel = mongoose.model('Transaction', transactionSchema);

module.exports = transactionModel;