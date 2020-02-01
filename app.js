//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
    res.render("page 1");
});

app.get("/")

var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });
  
  