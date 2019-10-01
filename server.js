const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const fetch = require("node-fetch")
const methodOverride = require("method-override");
const path = require("path");
const mongoose = require("mongoose")
const app = express();
require("dotenv").config();
// const MONGO_URI = process.env.MONGO_URI;

console.log("test")

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(() => { console.log("connection promise")}).catch((e) => { console.log(e) });

// DONT FORGET TO RUN HEROKU:CONFIG WITH THE URI
// Run heroku restart after
let db = mongoose.connection;
db.on("error", console.error.bind(console, "HOMIE U CRAZY"));
db.once("open", () => {
    console.log("Mongodb Connected!")
})

app.use(express.static(path.join(__dirname, "public")))
app.use(methodOverride("_method"))
app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/", require("./routes/api/carRoutes"));

app.get("/", (req, res) => {
    res.render("home", {
        title: "The Greatest Cars"
    })
})

app.get("/test", (req, res) => {
    res.send("Hello from test")
})


app.get("/all", (req, res) => {
    fetch("https://crud-car-list.herokuapp.com/api/all")
        .then(res => res.json())
        .then(cars => res.render("all", {
            title: "All Cars",
            cars: cars
        }))
})

app.listen(process.env.PORT || 5002, () => {
    console.log("Server listening on port 5002")
})