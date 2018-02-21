const router = require("express").Router();
const DateCreateUserController = require("../../controllers/DateCreateUserController/DateCreateUserController");
var db = require("../../models");
var jwt = require('jsonwebtoken');
const express = require('express');
var fs = require('fs');
const config = require('../../config');
//var app = require("express");
const app = express();

app.set('superSecret', config.secret); //secret Variable



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
        res.status(400).json({ success: false, message: "Authentication failed. User not found."});
    } else if (user) {
        if(user.password != req.body.password) {
            res.status(400).json({ success: false, message: "Authentication failed. Not the right password."});
        } else {
          console.log(user.admin);
            const payload = {
                admin: user.admin,
                screenName: user.screenName
            };
                
                var token = jwt.sign(payload, config.secret, {
                    expiresIn: 60 * 24
                });

                res.json({
                    success: true,
                    message: "Here's a token, don't spend it all at once",
                    token: token,
                    user: user
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
