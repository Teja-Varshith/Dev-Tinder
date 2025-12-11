const mongoose = require('mongoose');

const connectDb = async () => {
      await mongoose.connect("mongodb+srv://varshithteja86:Teja%401616@cluster0.o2xadup.mongodb.net/?appName=Cluster0"
    ); // agar password mai @ hai to url encode karna padta hai %40
    console.log("majbdhjv")
};

module.exports = {
    connectDb,
};

