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

mongoose.connect("mongodb+srv://admin-shivansh:shiv**2406@cluster0-zpipx.mongodb.net/officedb" , {useNewUrlParser: true , useUnifiedTopology: true});

const officeSchema = new mongoose.Schema({

    name : String,
    phone : Number,
    department : String,
    email: {
        type: String,
        validate: {
          validator: function(value) {
            return value === 'correct@example.com';
          },
          message: 'Invalid email.',
        },
      },
    password : String

  });
  
  const employee = mongoose.model("employee" , officeSchema);

app.get("/", function(req, res){
    res.render("page 1");
});

app.get("/page2" , function(req,res){
    res.render("page2");
});

app.get("/page3" , function(req,res){
    res.render("page3");
});

app.get("/page4" , function(req,res){
    res.render("page4");
});

var server = app.listen(process.env.PORT || 3000, function () {
    var port = server.address().port;
    console.log("Express is working on port " + port);
  });
  
  