const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
    day: {
        type: Date,
        default: () => new Date ()
    },
    excercises: [{
        type: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        weight: {
            type: Number
        },
        repetitions: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("workout", workoutSchema);
module.exports = Workout;