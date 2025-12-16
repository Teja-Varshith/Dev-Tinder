const mongoose = require('mongoose');

const connectDb = async () => {
      await mongoose.connect("mongodb+srv://varshithteja86:Teja%401616@cluster0.o2xadup.mongodb.net/devTinder" // .net ke baad databasee ka naam specify kar sakta hai
    ); // agar password mai @ hai to url encode karna padta hai %40
};

module.exports = {
    connectDb,
};

