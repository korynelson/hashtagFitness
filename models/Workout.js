const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    required: "Enter a date for workout",
    default: Date.now,
  },
  totalDuration: {
    type: Number,
    default: 0,
  },

  exercises: [
      {
        type: {
          type: String,
          required: "Please enter exercise type"
        },
        name: {
          type: String,
          required: "Please enter name of exercise"
        },
        duration: {
          type: Number,
          required: "Please enter duration of exercise"
        },

        weight: Number
        ,
        reps: Number
        ,
        sets: Number
        ,
        distance: Number
  }
]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
