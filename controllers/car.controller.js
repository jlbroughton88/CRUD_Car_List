const Car = require("../models/car.model");
const mongoose = require("mongoose");
const db = mongoose.connection;

exports.car_get_all = (req, res) => {
    db.model("Car").find({}, (error, result) => {
        if(error) { console.log(error) }
        else { res.send(result) }
    })
}

exports.car_get_one = (req, res) => {
    db.model("Car").findOne({ _id:req.params.id }, (error, result) => {
        if(error) { console.log(error) }
        else { res.send(result) }
    })
}

exports.car_add = (req, res) => {
    let car = new Car({
        year: req.body.year,
        brand: req.body.year,
        model: req.body.model
    })

    car.save((err) => {
        if(err) {
            console.log("Please try again with correct parameters.")
        } else { console.log( "Car added successfully!" )}
    });
    res.redirect("/")
}

exports.car_delete = (req, res) => {
    db.model("Car").deleteOne({ _id: req.params.id }, (error, result) => {
        if(result) {
            console.log("Car deleted successfully.")
            res.redirect("/")
        } else { console.log("Please try another vehicle ID.") }
    });
}