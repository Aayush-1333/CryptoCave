const mongoose = require("mongoose")
const { Schema } = mongoose

const UserSchema = new Schema({
    username: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone_no: {
        type: Number,
        required: true
    },

    password: {
        type: String,
        required: true
    }
})


module.exports = mongoose.model("Users", UserSchema)