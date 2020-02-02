//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const app = express();

app.use(express.static("public"));
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb://localhost:27017/todolistDB" ,{useNewUrlParser: true , useUnifiedTopology: true});

const officeSchema = new mongoose.Schema({

    name : String,
    password : String

  });
  
  const Employee = mongoose.model("Employee" , officeSchema);

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

app.post("/page2" , function(req ,res){
    const newEmployee = new Employee({
        name : req.body.name,
        phone : req.body.phone,
        department : req.body.department,
        email : req.body.email,
        password : req.body.password
    });
    newEmployee.save(function(err){
        if(!err){
            res.render("page3");
        }
    }); 
});

app.listen(3000 , function () {
    console.log("App started on server 3000");
});
  
  