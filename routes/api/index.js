const router = require("express").Router();
const DateCreateUserRoutes = require("./DateCreateUser");
const config = require('../../config');

// DateCreateUser routes
//router.use('superSecret', config.secret);
router.use("/DateCreateUsers", DateCreateUserRoutes);

module.exports = router;
