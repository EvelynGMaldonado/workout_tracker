const express = require('express');
const router = express.Router();
const path = require('path');
const db = require('../models');
const Workout = require('../models/Workout');

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    .then(dbWorkouts => {
        console.log(dbWorkouts);
        const workouts = dbWorkouts.map(workout => {
            console.log({workout});
            const duration = workout.exercises.reduce((acc, next) => {
                return acc + next.duration;
            }, 0);
            return {
                totalDuration: duration,
                ...workout.toObject()
            }
        })
        res.json(workouts);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
});

router.put("/api/workouts/:id", ({body, params}, res) => {
    db.Workout.findByIdAndUpdate(
        params.id,
        {$push: {exercises: body}},
        //running validators will make sure that the new exercises meet the chema requirements
        {new: true, runValidators:true}
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch((err) => {
        res.json(err);
    });
});

    router.post("/api/workouts", (req, res) => {
        Workout.create([{
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
        ])
        .then((dbWorkouts) => {
            res.json((dbWorkouts));
        })
        .catch((err) => {
            res.json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration',
                },
            },
        },
    ])
    .sort({_id: -1})
    .limit(7)
    .then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
    })
    .catch((err) => {
        res.json(err);
    });
});

router.delete("/api/workouts", ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(()=> {
        res.json(true);
    })
    .catch((err) => {
        res.json(err);
    })
})





module.exports = router;