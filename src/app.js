const express = require("express");

const app = express();

const { connectDb } = require("./config/database");


connectDb().then(() => {
    console.log("Db Connected sucessfully");
    app.listen(3000, () => {
    console.log("Server listening at port 3000");
});
})
.catch((err) => {
    console.log("db oconnecteed noooooottt" + err);
});

const { user } = require("./middlewares/auth");
