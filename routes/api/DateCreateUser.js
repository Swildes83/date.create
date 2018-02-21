const router = require("express").Router();
const DateCreateUserController = require("../../controllers/DateCreateUserController/DateCreateUserController");
var db = require("../../models");
var jwt = require('jsonwebtoken');
var app = require("express");
var fs = require('fs');
// var token = jwt.sign({ foo: 'bar'}, 'shhhhhh');
// //backdate the token 30 seconds
// var older_token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhhh');
// //const token = jwt.sign(user, '12345');

// //sign with RSA SHA256
// var cert = fs.readFileSync('private.key');
// var token = jwt.sign({ foo: 'bar'}, cert, {algorithm: 'RS256'});

// //sign async
// jwt.sign({ foo: 'bar'}, cert, { algorithm: 'RS256'}, function(err, token) {
//   console.log(token);
// });

// Matches with "/api/DateCreateUsers"
router.route("/")
  .get(DateCreateUserController.findAllUsers)
  .post(DateCreateUserController.createUser);

// Matches with "/api/DateCreateUsers/:id"
router.route("/:id")
  .get(DateCreateUserController.findById)
  .put(DateCreateUserController.updateRecord);

  // DOCUMENTED: POST http://localhost:8080/api/authenticate
  // OURS http://localhost:3001/api/DateCreateUsers/authenticate
  router.post("/authenticate", function(req, res) {
    db.DateCreateUser.findOne({
      screenName: req.body.screenName
  }, function(err, user) {
      if(err) throw err;

      if(!user) {
          res.json({ success: false, message: "Authentication failed. User not found."});
      } else if (user) {
          if(user.password != req.body.password) {
              res.json({ success: false, message: "Authentication failed. Not the right password."});
          } else {
            console.log(user.admin);
              const payload = {
                  admin: user.admin
              };

                  var token = jwt.sign(payload, router.get('datedotcreateisawesome'), {
                      expiresIn: 60 * 24
                  });

                  res.json({
                      success: true,
                      message: "Here's a token, don't spend it all at once",
                      token: token
                  });
          }
      }
  });
  });
  //.post(DateCreateUserController.findOne);

// Matches with "api/DateCreateUsers/search/city=:locCity&state=:locState&gender=:gender"
router.route("/search/city\=:locCity&state\=:locState&gender\=:gender")
  .get(DateCreateUserController.findMatch)
module.exports = router;
