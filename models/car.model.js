const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CarSchema = new Schema({
    year: {type: Number},
    brand: { type: String, required: true },
    model: { type: String, required: true },
    horsePower: { type: Number },
    torque: { type: Number }
})

module.exports = mongoose.model("Car", CarSchema);