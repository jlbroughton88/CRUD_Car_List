const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const fetch = require("node-fetch")
const methodOverride = require("method-override");
const path = require("path");
const app = express();
require("dotenv").config();
const MONGO_URI = process.env.MONGO_URI;
console.log(MONGO_URI)

const mongoose = require("mongoose")
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error: "));
db.once("open", function () {
    console.log("Mongodb Connected!")
})

app.use(express.static(path.join(__dirname, "public")))
// app.set("views",path.join(__dirname, "public/home"))
app.use(methodOverride("_method"))
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("./routes/api/carRoutes"));

app.get("/", (req, res) => {
    res.send("Hello")
    // res.render("home", {
    //     title: "The Greatest Cars"
    // })
})


app.get("/all", (req, res) => {
    fetch("localhost:5002/api")
        .then(res => res.json())
        .then(cars => res.render("all", {
            title: "All Cars",
            cars: cars
        }))
})

app.listen(process.env.PORT || 5002, () => {
    console.log("Server listening on port 5002")
})