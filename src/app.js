const express = require("express");
const { connectDb } = require("./config/database");
const app = express();
const user = require("./models/user");

app.post("/signUp",async (req,res) => {
    const user1 = new user({
        firstName : "Teja",
        lastName: "Vershit",
        age: 20
    })

    try{
        await user1.save();
        res.send("User saved sucessfully");
    }
    catch(e) {
        res.status(400).send("jhejhs")
    }
})


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
