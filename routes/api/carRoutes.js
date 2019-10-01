const express = require("express");
const router = express.Router();
const car_controller = require("../../controllers/car.controller");

router.get("/api/all", car_controller.car_get_all);
router.get("/brand/:brand", car_controller.car_get_brand);
router.get("/single/:id", car_controller.car_get_one);
router.post("/add", car_controller.car_add);
router.delete("/delete/:id", car_controller.car_delete);

// router.get("/", (req, res) => {
//     res.json(cars)
// })

// router.get("/:year/:brand/:model", (req, res) => {
//     let found = cars.some(car => car.brand.toUpperCase() === req.params.brand.toUpperCase());
    
//     if(found) {
//         let foundCars = cars.filter(car => car.brand.toUpperCase() === req.params.brand.toUpperCase());
//         let brandAndYear = foundCars.filter(car => car.year === parseInt(req.params.year))
//         let singleCarArr = brandAndYear.filter(car => car.model.replace(/\s+/g, '') === req.params.model.replace(/\s+/g, ''))
//         car = singleCarArr[0]
//         res.render("single", {
//             title: car.brand,
//             car
//         })
        
//     } else {
//         res.send("<h1>Please try another search.</h1>")
//     }
// })

// router.get("/:brand", (req, res) => {
//     let found = cars.some(car => car.brand.toUpperCase() === req.params.brand.toUpperCase());
    
//     if(found) {
//         let foundCars = cars.filter(car => car.brand.toUpperCase() === req.params.brand.toUpperCase());
//         res.redirect(`/${foundCars[0].brand.toLowerCase()}`)
//     } else {
//         res.send("<h1>Please try another search.</h1>")
//     }
// })

// router.post("/", (req, res) => {
//     let newCar = req.body;
//     newCar.year = parseInt(newCar.year)
//     newCar.id = uuid();
//     cars.push(newCar)
//     res.redirect("/")
// })

// router.put("/:id", (req, res) => {
//     let updateThis = cars.find(car => car.id === parseInt(req.params.id));
//     let newAttributes = req.body;
    
//     if(newAttributes.year) { updateThis.year = newAttributes.year }
//     if(newAttributes.brand) { updateThis.brand = newAttributes.brand }
//     if(newAttributes.model) { updateThis.model = newAttributes.model }
//     console.log(updateThis)
    
// })

// router.delete("/delete/:id", (req, res) => {
//     let deleteThis = cars.find(car => car.id === parseInt(req.params.id));
//     let indexOfDelete = cars.indexOf(deleteThis, deleteThis)
//     cars.splice(indexOfDelete, 1)
//     res.redirect("/")
// } )

module.exports = router;