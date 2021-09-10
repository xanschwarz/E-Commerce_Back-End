const router = require("express").Router();
const apiRoutes = require("./api");

// Prefix all routes defined in the api directory with '/api'
router.use("/api", apiRoutes);

// Invalid destinations will respond with Wrong Route message.
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;
