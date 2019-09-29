const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4")
const cars = require("../../carsJSON")

router.get("/", (req, res) => {
    res.json(cars)
})

router.get("/:brand", (req, res) => {
    let found = cars.some(car => car.brand.toUpperCase() === req.params.brand.toUpperCase());
    
    if(found) {
        let foundCars = cars.filter(car => car.brand.toUpperCase() === req.params.brand.toUpperCase());
        res.redirect(`/${foundCars[0].brand.toLowerCase()}`)
    } else {
        res.send("<h1>Please try another search.</h1>")
    }
})

router.post("/", (req, res) => {
    let newCar = req.body;
    newCar.year = parseInt(newCar.year)
    newCar.id = uuid();
    cars.push(newCar)
    console.log(cars)
    res.redirect("/")
})

router.put("/:id", (req, res) => {
    let updateThis = cars.find(car => car.id === parseInt(req.params.id));
    let newAttributes = req.body;
    
    if(newAttributes.year) { updateThis.year = newAttributes.year }
    if(newAttributes.brand) { updateThis.brand = newAttributes.brand }
    if(newAttributes.model) { updateThis.model = newAttributes.model }
    console.log(updateThis)
    
})

router.delete("/delete/:id", (req, res) => {
    let deleteThis = cars.find(car => car.id === parseInt(req.params.id));
    let indexOfDelete = cars.indexOf(deleteThis, deleteThis)
    cars.splice(indexOfDelete, 1)
    res.redirect("/")
} )

module.exports = router;