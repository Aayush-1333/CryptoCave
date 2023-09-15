const mongoose = require("mongoose")

const connectToMongo = async ()=>{
    const response = mongoose.connect("mongodb+srv://yadneshgovalkar:projectdypu@cryptocave.essmlf5.mongodb.net/cryptodb")

    return response
}

module.exports = connectToMongo