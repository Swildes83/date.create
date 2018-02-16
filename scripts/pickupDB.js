const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/datecreate"
);

const PickupSeed = [
  {
    pickupLine: "You had me at 'Hello World'."
  },
  {
    pickupLine: "I hope we merge without any conflicts."
  },
  {
    pickupLine: "I love User Interfaces, because that's where U and I are together."
  },
  {
    pickupLine: "I wish you were async, so you'd give me a callback."
  },
  {
    pickupLine: "Is your name Wifi? Because I'm really feeling a connection."
  },
  {
    pickupLine: "You're async, but I'd wait for you."
  },
  {
    pickupLine: "When you commited into my repository, it stopped being open source."
  },
  {
    pickupLine: "Are your pants a compressed file? Because I'd love to unzip them!"
  },
  {
    pickupLine: "Roses are #FF0000, violets are #0000FF..."
  },
  {
    pickupLine: "You auto-complete me."
  },
  {
    pickupLine: "My love for you is like a session that never times out."
  },
  {
    pickupLine: "You are the CSS to my HTML."
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
