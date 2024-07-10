const mongoose = require("mongoose");
const MONGO_URL = "mongodb://localhost:27017/education_dev";

async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/education_dev", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Susscessfully");
  } catch (error) {
    console.log("Fail!!!", error);
  }
}
module.exports = { connect };
