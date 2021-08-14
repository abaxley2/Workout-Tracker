const router = require("express").Router();
const { Router } = require("express");
const { Workout } = require("../models");
const db = require("../models");

// get routes
router.get("/", (req, res) => {
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration" } },
    },
  ])
    .sort({ day: 1 })
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/range", (req, res) => {
  Workout.aggregate([
    {
      $addFields: { totalDuration: { $sum: "$exercises.duration" } },
    },
  ])
    .sort({ _id: -1 })
    .limit(7)
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// post route
router.post("/", ({ body }, res) => {
  Workout.create(body)
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// put route
router.put("/:id", (req, res) => {
  Workout.findByIdAndUpdate(
    { _id: req.params.id },
    { $push: { exercises: req.body } }
  )
    .then((dbWorkout) => {
      res.json(dbWorkout);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
