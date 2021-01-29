/**
 * Add all routes here
 */
const express = require("express");
const router = new express.Router();

const HelloController = require('./controllers/HelloController')

router.get("/say", HelloController.say)

router.use((req, res, next) => {
  if (!req.route) {
    res.status(404).json({
      status: "not-found",
      message: "This endpoint does not exist",
    });
  }
});

module.exports = router;