const mongoose = require("mongoose");

const transactionSchema =  new mongoose.Schema({
    amount:{
        type: Number,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    radio:{
        type: String,
        required: true
    }
})

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = {Transaction}