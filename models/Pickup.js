const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PickupSchema = new Schema({
  pickupLine: String,
});

const Pickup = mongoose.model("Pickup", PickupSchema);

module.exports = Pickup;
