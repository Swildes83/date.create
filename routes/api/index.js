const router = require("express").Router();
const DateCreateUserRoutes = require("./DateCreateUser");

// DateCreateUser routes
router.use("/DateCreateUsers", DateCreateUserRoutes);

module.exports = router;
