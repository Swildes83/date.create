const router = require("express").Router();
const userRoutes = require("./user");

// User routes
router.use("/test", userRoutes);

module.exports = router;
