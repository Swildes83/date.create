const router = require("express").Router();
const DateCreateUserController = require("../../controllers/DateCreateUserController/DateCreateUserController");

// Matches with "/api/DateCreateUsers"
router.route("/")
  .get(DateCreateUserController.findAllUsers);
  // .post(DateCreateUserController.create);

// Matches with "/api/User/:id"
router
  .route("/:id")
  .get(DateCreateUserController.findById)
  .put(DateCreateUserController.update)
  .delete(DateCreateUserController.removeContact);

module.exports = router;
