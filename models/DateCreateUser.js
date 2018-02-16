const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DateCreateUserSchema = new Schema({
  screenName: { type: String, required: true, unique: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  password: {type: String, required:true },
  email: {type:String, required: true},
  admin: Boolean, 
  locCity: String,
  locState: String,
  bioGaming: String,
  bioTechnology: Array,
  bioAFKHobbies: Array,
  bioMovies: Array,
  bioTV: Array,
  bioMusic: Array,
  bioCurrentlyReading: Array,
  bioCurrentlyWatching: Array,
  bioCurrentlyListening: Array,
  bioMantra: String,
  bioCurrentRelStatus: { type: Boolean, required: true},
  savedPotentials: Array,
  contactList: Array,
  reqGender: { type: String, required: true },
  reqTech: Array,
  reqGaming: Array,
  reqLocCity: String,
  reqLocState: String,
  reqAgeMin: Number,
  reqAgeMax: Number,
  reqAFKHobbies: Array,
  privBlockedUserIds: Array

});

const DateCreateUser = mongoose.model("DateCreateUser", DateCreateUserSchema);

module.exports = DateCreateUser;
