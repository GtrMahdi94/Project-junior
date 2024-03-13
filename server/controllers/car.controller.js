// DELETE THIS LINE
// const selectAll = () => {};

// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require("../database-mysql");
const Car = require('../database-mongo/car.model');

// UNCOMMENT IF USING MYSQL WITH CALLBACKS
// const selectAll = function (req, res) {
//   db.query("SELECT * FROM items", (err, items, fields) => {
//     if (err) {
//       res.status(500).send(err);
//     } else {
//       res.status(200).send(items);
//     }
//   });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES
// const selectAll = function (req, res) {
//   Item.find({})
//     .then((items) => {
//       res.status(200).send(items);
//     })
//     .catch((error) => {
//       res.status(500).send(error);
//     });
// };

// UNCOMMENT IF USING MONGOOSE WITH PROMISES & ASYNC AWAIT

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


}