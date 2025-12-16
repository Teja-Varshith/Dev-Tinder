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
    },

    emailId: {
        type: String,
    },

    password: {
        type: String,
        minLength: 4,
    }
}, {timestamps: true})

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;