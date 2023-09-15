const mongoose = require("mongoose")
const {Schema} = mongoose

const TransactionSchema = new Schema({
    date: {
        type: String,
        required: true
    },

    open: {
        type: String,
        required: true
    },

    high: {
        type: String,
        required: true
    },

    low: {
        type: String,
        required: true
    },

    close: {
        type: String,
        required: true
    },

    volume: {
        type: String,
        required: true
    },

    market_cap: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Transactions", TransactionSchema)