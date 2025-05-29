const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
  goal: String,
  level: String,
  equipment: String,
  generatedPlan: String,
  createdAt: { type: Date, default: Date.now },
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;