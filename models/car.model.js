const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let CarSchema = new Schema({
    year: {type: Number},
    brand: { type: String, required: true },
    model: { type: String, required: true },
    hp: { type: Number, required: true },
    tq: { type: Number, required: true },
    msrp: { type: Number, required: true }
})

module.exports = mongoose.model("Car", CarSchema);