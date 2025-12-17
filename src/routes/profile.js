const express = require("express");
const { userAuth } = require("../middlewares/auth");


const profileRouter = express.Router();

profileRouter.get("/profile", userAuth, async (req,res) => {
    try{
        const user = req.user;
        console.log(user);
        res.send("Reading cookie")
    

    }catch(e){

    }
});

module.exports = profileRouter;