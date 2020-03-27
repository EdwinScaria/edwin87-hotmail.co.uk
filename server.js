const express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose");

app.use(express.json());
app.use(bodyParser.json());

app.set("port", process.env.PORT || 5000);

require("dotenv").config();
let name = process.env.REACT_APP_NAME;
let password = process.env.REACT_APP_PASSWORD;

mongoose.connect(
  `mongodb+srv://${name}:${password}@travel-nunyn.azure.mongodb.net/travel?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const db = mongoose.connection;

db.once("open", () => {
  console.log("Successfully connected to MongoDB using Mongoose!");
});

app.listen(app.get("port"), () => {
  console.log(
    `AAF Express Server running at http://localhost:${app.get("port")}`
  );
});

let Contenful = require("./Contentful.js");

app.route("/").get((req, res) => {
  Contenful.find(function(err, contentful) {
    if (err) {
      console.log(err);
    } else {
      res.json(contentful);
    }
  });
});

app.route("/id").get((req, res) => {
  let id = "5e769eb88fcd4b35a083b387";
  Contenful.findById(id, (err, Contenful) => {
    res.json(Contenful);
  });
});

const cookieParser = require("cookie-parser");
app.use(cookieParser());
const withAuth = require("./middleware");
const secret = "mysecretsshhh";
const jwt = require("jsonwebtoken");
let token = "";

app.post("/access", function(req, res) {
  token = jwt.sign({ payload: "token" }, secret, {
    expiresIn: "1h"
  });
  res.cookie("token", token, { httpOnly: true }).sendStatus(200);
});

app.get("/checkToken", withAuth, function(req, res) {
  res.sendStatus(200);
});

app.get("/logout", function(req, res) {
  res.clearCookie("token", token, { httpOnly: true }).sendStatus(200);
});
