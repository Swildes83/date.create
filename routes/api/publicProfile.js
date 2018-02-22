const router = require("express").Router();
const publicProfile = require("/Users/jaxin/Desktop/date.create/client/src/components/userPages/publicProfile.js");


router.route("/profile")
 .get(DateCreateUserController.findById);
