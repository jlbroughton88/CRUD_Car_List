const express = require("express");
const router = express.Router();
const car_controller = require("../../controllers/car.controller");

router.get("/api/all", car_controller.car_get_all);
router.get("/brand/:brand", car_controller.car_get_brand);
router.get("/single/:id", car_controller.car_get_one);
router.post("/add", car_controller.car_add);
router.delete("/delete/:id", car_controller.car_delete);


module.exports = router;