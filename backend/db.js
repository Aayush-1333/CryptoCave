const mongoose = require("mongoose")
require("dotenv").config()
const uri = process.env.MONGO_URI

const connectToMongo = () => {
    const response = mongoose.connect(uri)

    return response
}

module.exports = connectToMongo
