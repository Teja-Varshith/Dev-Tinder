const express = require("express");
const { userAuth } = require("../middlewares/auth");
const requestRouter = express.Router();

requestRouter.post("/sendConnectionRequest", userAuth, async(req,res) => {
   try{ const user = req.user;

    console.log("sending reqqqq");

    res.send(user.firstName + "sent the connection request");
    }catch(e){
        console.log(e);
    }
});

module.exports = requestRouter;