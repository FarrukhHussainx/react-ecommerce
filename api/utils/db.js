const mongoose = require("mongoose");

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log("already connected");
    return;
  }
  try {
    const DB = process.env.BASEURLDB;
    //const DB = "mongodb://0.0.0.0:27017";
    mongoose.set("strictQuery", true);
    await mongoose.connect(DB);

    isConnected = true;
    console.log("connected to database");
  } catch (error) {
    throw new Error("connection fail");
  }
};

module.exports = connectDB;
