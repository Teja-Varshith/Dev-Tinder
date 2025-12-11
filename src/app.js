const express = require("express");

const app = express();


app.get("/user",(req,res) => {
    console.log(req.query);
    console.log(req.params);
    res.send("Hello is hello");
})

app.use("/a*b",(req,res) => {
    res.send("Hello from the server!");
});





app.listen(3000, () => {
    console.log("Server listening at port 3000");
});