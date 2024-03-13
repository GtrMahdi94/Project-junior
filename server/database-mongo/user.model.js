const mongoose = require("mongoose");
const db = require("./index.js");
const UserSchema = new mongoose.Schema({
login: String,
password: String,


});

const User = mongoose.model("User", UserSchema);

module.exports = User;