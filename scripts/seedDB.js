const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the users below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/datecreate",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    screenName: "lcrouch",
    firstName: "Levi",
    lastName: "Crouch",
    age: 25,
    gender: "M",
    location: "San Diego",
    bioGaming: "",
    bioTechnology: "JavScript",
    bioAFKHobbies: "Hiking",
    bioMovies: "The Shawshank Redemption",
    bioCurrentlyReading: "",
    bioCurrentlyWatching: "Peaky Blinders S3",
    bioMantra: "I need an adult",
    bioCurrentRelStatus: true,
    savedPotentials: "",
    contactList: "",
    reqGender: "F",
    reqTech: "",
    reqGaming: "",
    reqLocation: "San Diego",
    reqAgeMin: 35,
    reqAgeMax: 45,
    reqAFKHobbies: "",
    privBlockedUserIds: []
  },
  {
    screenName: "ChickenKiller",
    firstName: "Peter",
    lastName: "Griffin",
    age: 45,
    gender: "M",
    locCity: "Quahog",
    locState: "MD",
    bioGaming: "",
    bioTechnology: "lol whut!?",
    bioAFKHobbies: "Making a mess of things",
    bioMovies: "Roadhouse",
    bioCurrentlyReading: "?",
    bioCurrentlyWatching: "Gumbel & Gumbel",
    bioMantra: "I just do stuff",
    bioCurrentRelStatus: true,
    savedPotentials: "",
    contactList: "",
    reqGender: "F",
    reqTech: "",
    reqGaming: "",
    reqLocation: "Quahog",
    reqAgeMin: 18,
    reqAgeMax: 99,
    reqAFKHobbies: "",
    privBlockedUserIds: []
  }
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
