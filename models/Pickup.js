const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PickupSchema = new Schema({
  id: Number,
  pickupLine: String,
});

const DateCreateUser = mongoose.model("Pickup", PickupSchema);

module.exports = Pickup;
