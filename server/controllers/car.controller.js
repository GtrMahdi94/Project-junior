const Car = require('../database-mongo/car.model');



module.exports = {
getAll : async function (req, res) {
  try {
    const cars = await Car.find({});
    res.status(200).send(cars);
  } catch (error) {
    res.status(200).send(error);
  }
},
add : async function (req, res) {
    try {
      const car = await Car.create(req.body);
      res.status(200).send(car);
    } catch (error) {
      res.status(200).send(error);
    }
  },

  put : async function (req, res) {
    try {
      const cars = await Car.find({type:req.body.type});
      res.status(200).send(cars);
    } 
    catch (error) {
      res.status(400).send(error);
    }
  },


}