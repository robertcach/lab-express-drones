const drones = [
    { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
    { name: "Racer 57", propellers: 4, maxSpeed: 20 },
    { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
  ];


require("dotenv").config();
require("../db/index")

const Drone = require("../models/Drone.model");

Drone.deleteMany()
.then(() => Drone.insertMany(drones))
.then((dronesCreated) => console.log(dronesCreated))
.catch((e) => console.log(e))
.finally(() => {
  process.exit();
})