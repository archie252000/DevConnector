const express = require("express");
const router = express.Router();
cons;

const auth = require("../../middleware/auth");

// @route    GET api/p rofile/me
// @desv     Get current users profile
// @access   Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate();
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
