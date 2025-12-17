const express = require("express");
const { connectDb } = require("./config/database");
const app = express();
const user = require("./models/user");
const validateSignUpData = require("./utils/validation");
const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
const saltRounds = 10;
const { userAuth } = require("./middlewares/auth");


app.use(express.json()); // middleware for converting the json to javascript object
app.use(cookieParser());

app.post("/signUp",async (req,res) => {
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
        res.status(400).send("Error:" + e)
    }
})

app.post("/logIn", async (req,res) => {
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

app.get("/profile", userAuth, async (req,res) => {
    try{
        const user = request.user;
        res.send("Reading cookie")
    

    }catch(e){

    }
});

app.get("/user", async (req,res) => {
    try{
    const userName = req.body["firstName"];
    console.log(userName);
    console.log(typeof(userName));
    res.send(await user.find({firstName: userName}));
    }
    catch(err){
        console.log("Error: " + err);
    }
});


connectDb().then(() => {
    console.log("Db Connected sucessfully"); 
    app.listen(3000, () => {
    console.log("Server listening at port 3000");
});
})
.catch((err) => {
    console.log("db oconnecteed noooooottt" + err);
});

const { authCheck } = require("./middlewares/auth");
