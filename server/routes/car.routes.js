const router = require('express').Router();
const carController = require("../controllers/car.controller");

router.get("/getAll", carController.getAll);
router.post('/add' ,carController.add)
module.exports = router;
