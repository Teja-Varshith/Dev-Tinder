const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },

    age : {
        type: Number,
    }
})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;