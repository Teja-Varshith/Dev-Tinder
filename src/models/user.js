const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

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
}, {timestamps: true});

userSchema.methods.getJWT = async function() {
    const user = this;
    const token = await jwt.sign({_id: user._id}, "Teja");
    return token;
}

userSchema.methods.verifyPassword = async function(password) {
    const user = this;
   return await bcrypt.compare(password,this.password);
}

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;