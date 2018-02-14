const router = require("express").Router();
const DateCreateUserController = require("../../controllers/DateCreateUserController/DateCreateUserController");

// Matches with "/api/DateCreateUsers"
router.route("/")
  .get(DateCreateUserController.findAllUsers)
  .post(DateCreateUserController.createUser);

// Matches with "/api/DateCreateUsers/:id"
router.route("/:id")
  .get(DateCreateUserController.findById)
  .put(DateCreateUserController.updateRecord);

// Matches with "api/DateCreateUsers/:id/search/city=:locCity&state=:locState&gender=:gender"
router.route("/:id/search/city\=:locCity&state\=:locState&gender\=:gender")
  .get(DateCreateUserController.findMatch)
module.exports = router;
