// added dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  exercises: Array,
});

const db = { Workout: Workout };

module.exports = db;