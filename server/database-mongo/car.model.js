const mongoose = require("mongoose");
const db = require("./index.js");
const CarSchema = new mongoose.Schema({
type: String,
Model: String,
year: Date,
kilometre: Number,
price: Number,
description: String,
contact :Number,
imgUrl:String,

});

const Car = mongoose.model("Car", CarSchema);

module.exports = Car;