const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const myWorkOut = new Schema ({
    day: {
        type: Date,
        default: Date.now
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

const Workout = mongoose.model("Workout", myWorkOut);
module.exports = Workout;