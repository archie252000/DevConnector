const express = require("express");
const router = express.Router();
// @route    GET api/users
// @desv     Test route
// @access   Public
router.get("/", (req, res) => res.send("Auth route"));

module.exports = router;