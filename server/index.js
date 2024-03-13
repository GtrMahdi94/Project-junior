const express = require("express");
const carRoutes = require('./routes/car.routes')
const userRoutes = require('./routes/user.routes')

const cors = require('cors')

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
const db = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors())
app.use(express.static(__dirname + "/../client/dist"));

app.use("/api/cars", carRoutes);
app.use("/api/user",userRoutes)

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
