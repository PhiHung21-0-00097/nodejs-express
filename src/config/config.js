const mongoose = require("mongoose");

const MONGO_URL = "mongodb://localhost:27017/test-api";

async function connect() {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connect Susscessfully");
  } catch (error) {
    console.log("Fail!!!");
  }
}
module.exports = { connect };
