const router = require("express").Router();
const { Router } = require("express");
const { Workout } = require("../models");
const db = require("../models");

router.get("/", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
