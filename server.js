const express = require("express");
const cors = require("cors");

const about = require("./about.json");
const categoriesList = require("./categoriesList.json");
const timeManagement = require("./resourceList-TimeManagement.json");
const goals = require("./resourceList-Goals.json");
const habits = require("./resourceList-Habits.json");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.get("/index", (req, res) => {
    res.redirect("/goals");
});

app.get("/home", (req, res) => {
    res.json(categoriesList);
    console.log(`categoriesList: ${categoriesList}`)
});

app.get("/about", (req, res) => {
    res.json(about);
});

app.get("/timeManagement", (req, res) => {
    res.json(timeManagement);
});


app.get("/goals", (req, res) => {
    res.json(goals);
});



app.get("/habits", (req, res) => {
    res.json(habits);
});
  
const PORT = process.env.PORT || 4000;
  
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));