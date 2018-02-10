const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  screenName: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  locCity: String,
  locState: String,
  bioGaming: String,
  bioTechnology: String,
  bioAFKHobbies: String,
  bioMovies: String,
  bioCurrentlyReading: String,
  bioCurrentlyWatching: String,
  bioMantra: String,
  bioCurrentRelStatus: { type: Boolean, required: true},
  savedPotentials: Object,
  contactList: Object,
  reqGender: { type: String, required: true },
  reqTech: String,
  reqGaming: String,
  reqLocation: String,
  reqAgeMin: Number,
  reqAgeMax: Number,
  reqAFKHobbies: String,
  privBlockedUserIds: Array

});

const User = mongoose.model("users", userSchema);

module.exports = User;
