const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/pickup"
);

const PickupSeed = [
  {
    id: 1
    pickupLine: "You had me at 'Hello World'."
  },
  {
    id: 2
    pickupLine: "If you were a booger, I'd pick you first'."
  },
  {
    id: 3  
    pickupLine: "My love for you is like dividing by zero-- it cannot be defined."
  }
   }
];

db.Pickup
  .remove({})
  .then(() => db.Pickup.collection.insertMany(PickupSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
