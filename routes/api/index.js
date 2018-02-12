const router = require("express").Router();
const DateCreateUserRoutes = require("./DateCreateUser");

// User routes
router.use("/DateCreateUsers", DateCreateUserRoutes);

module.exports = router;
