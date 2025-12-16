const User = require("../models/user");
const jwt = require("jsonwebtoken");

const userAuth = async (req,res,next) => {
    try{ const cookies = req.cookies;
     
     const {token} = cookies;

     const decodedMessage = await jwt.verify(token,"Teja");

     const{ _id } = decodedMessage;

     const user = await User.findById(_id);
     req.user = user;
     
     if(!user){
        throw new Error("user not found");
     }
     next();
    }catch(e){
        res.status(400).send("Error" + e);
    }

};

module.exports = {
    userAuth,
}