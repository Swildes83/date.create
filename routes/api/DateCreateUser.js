const router = require("express").Router();
const DateCreateUserController = require("../../controllers/DateCreateUserController/DateCreateUserController");

// Matches with "/api/DateCreateUsers"
router.route("/")
  .get(DateCreateUserController.findAllUsers)
  .post(DateCreateUserController.createUser);

// Matches with "/api/DateCreateUsers/:id"
router
  .route("/:id")
  .get(DateCreateUserController.findById)
  .put(DateCreateUserController.updateRecord);

// Matches with "/api/DateCreateUsers/:id/search/:locCity/:locState/:gender"
router
  // .route("/:id/search/city=:locCity?state=:locState/gender=:gender")
  .route("/:id/search/city\=:locCity&state\=:locState&gender\=:gender")
  // 5a826338fe24662c0c4054e3
  .get(DateCreateUserController.findMatch)
module.exports = router;
