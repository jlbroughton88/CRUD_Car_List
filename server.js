const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const path = require("path")
const app = express();
const cars = require("./carsJSON")
app.use(methodOverride("_method"))
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");



app.get("/", (req, res) => {
    res.render("home", {
        title: "Car Wiki",
        cars: cars
    })
})

app.get("/:brand", (req, res) => {
    res.render("brand", {
        title: "Brand"
    })
})

app.get("/:year/:brand/:model", (req, res) => {
    res.render("single", {
        title: "Selected Car"
    })
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/cars", require("./routes/api/carRoutes"));
app.use(express.static(path.join(__dirname, "/public")));


app.listen(process.env.PORT || 5002, () => {
    console.log("Server listening on port 5002")
})