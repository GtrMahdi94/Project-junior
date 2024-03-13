const mongoose = require("mongoose");
const mongoUri = "mongodb://127.0.0.1/mvp";
mongoose.set('strictQuery', true);






mongoose.connect(mongoUri, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
  console.log("DataBase Connected Succesfuly");
});
const db = mongoose.connection;

module.exports = db