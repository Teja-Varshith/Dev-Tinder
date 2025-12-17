const express = require("express");
const { connectDb } = require("./config/database");
const app = express();
const cookieParser = require("cookie-parser");


app.use(express.json()); // middleware for converting the json to javascript object
app.use(cookieParser());


const authRouter = require("./routes/auth");
const profileRouter = require("./routes/profile");
const requestRouter = require("./routes/request");

app.use("/",authRouter);
app.use("/",profileRouter);
app.use("/",requestRouter);


connectDb().then(() => {
    console.log("Db Connected sucessfully"); 
    app.listen(3000, () => {
    console.log("Server listening at port 3000");
});
})
.catch((err) => {
    console.log("db oconnecteed noooooottt" + err);
});
