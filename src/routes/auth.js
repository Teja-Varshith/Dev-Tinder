const express = require("express");
const authRouter = express.Router();
const validateSignUpData = require("../utils/validation");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const user = require("../models/user");


authRouter.post("/signUp",async (req,res) => {
       try{
    // Validation of the data
    validateSignUpData(req);
    const user1 = new user(req.body);
    // Encrypt the  password
    user1.password = await bcrypt.hash(user1.password,saltRounds);
        await user1.save();
        res.send("User saved sucessfully");
    }
    catch(e) {
        console.log(e);
        res.status(400).send("Error:" + e)
    }
});

authRouter.post("/logIn", async (req,res) => {
    try{
    const {emailId, password} = req.body;
    console.log(emailId + password);
    const userExsists = await user.findOne({emailId: emailId});
    // console.log(userExsists);
    if(!userExsists){
        return res.status(404).send("user dont exsists");
    }
    

    const isAllowed = userExsists.verifyPassword(password);
    console.log(isAllowed);
    if(!isAllowed){
        return res.status(404).send("Wrong Credentials");   
    }

    const token = await userExsists.getJWT();

    res.cookie("token",token);

    res.send("logged in sucessfulllll.....");
}catch(e){
    res.status(400).send("Error:" + e)

}

})

module.exports = authRouter;