//const router = require("express").Router();
const Workout = require("../models/workoutDB");

module.exports = function (app) {
    app.get("/api/workouts", (req, res) => {
        Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
    });

    app.get("/api/workouts/range", (req, res) => {
        Workout.find({}).then(dbWorkout => {
            res.json(dbWorkout);
        })
    });

    app.post("/api/workouts", ({ body }, res) => {
        Workout.create({}).then(dbWorkout => {
            console.log(dbWorkout)
            res.json(dbWorkout);
        })
    });

    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body);
        console.log(params.id)
        Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, { new: true }).then(
            dbWorkout => {
                console.log("we are updated");

                res.json(dbWorkout);
            }

        )
            .catch(err => {
                console.log("we error")
                console.log(err);
            })
    })
}