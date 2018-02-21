const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes");
const morgan = require('morgan');
const app = express();
//const io = require('socket.io');

//Web Token
const jwt = require('jsonwebtoken');
// Gets the mongoose model from DateCreateUser.js
const DateCreateUser = require('./models/DateCreateUser');
const config = require('./config');
const PORT = process.env.PORT || 3001;

app.set('superSecret', config.secret); //secret Variable


// io.on('connection', (client) => {

// });
////////////////////////
//
// const port = 8000;
// io.listen(port);
//console.log('listening on port ', port);

// Serve up static assets (usually on heroku)

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//use morgon to log requests to the console
app.use(morgan('dev'));

var db = require("./models");
app.use(routes);
// app.post("/api/DateCreateUsers/authenticate", function(req, res) {
//   db.DateCreateUser.findOne({
//     screenName: req.body.screenName
// }, function(err, user) {
//     if(err) throw err;

//     if(!user) {
//         res.json({ success: false, message: "Authentication failed. User not found."});
//     } else if (user) {
//         if(user.password != req.body.password) {
//             res.json({ success: false, message: "Authentication failed. Not the right password."});
//         } else {
//           console.log(user.admin);
//             const payload = {
//                 admin: user.admin
//             };
                
//                 var token = jwt.sign(payload, app.get('superSecret'), {
//                     expiresIn: 60 * 24
//                 });

//                 res.json({
//                     success: true,
//                     message: "Here's a token, don't spend it all at once",
//                     token: token
//                 });
//         }
//     }
// });
// });
// Send every request to the React app
// Define any API routes before this runs




app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/datecreate"
);

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
