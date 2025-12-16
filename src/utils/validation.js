const validator = require("validator");

const validateSignUpData = (req) => {
    const {firstName,lastName,age,emailId,password} = req.body;

    if(!firstName || !lastName){
        throw new Error("Name is not valid");
    }
    else if(password.length < 4){
        throw new Error("weak password");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("not a strong password");
    }
}

module.exports = validateSignUpData;