const router = require("express").Router();
const { Router } = require("express");
const { Workout } = require("../models");
const db = require("../models");

// get routes
router.get("/", (req, res) => {
  Workout.find({})
    .sort({ day: 1 })
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/range", (req, res) => {
  Workout.find({})
    .sort({ day: -1 })
    .then((dbWorkout) => {
      res.send(dbWorkout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// post routes
// router.post("/", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then((dbWorkout) => {
//       res.send(dbWorkout);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

module.exports = router;
