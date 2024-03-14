const router = require('express').Router();
const carController = require("../controllers/car.controller");

router.get("/getAll", carController.getAll);
router.post('/add' ,carController.add)
router.get('/search/:name' ,carController.search)
router.delete('/delete:id',carController.delete)

module.exports = router;