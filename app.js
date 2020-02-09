//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const _ = require("lodash");
const nodemailer = require('nodemailer');
const md5 = require('md5');
const app = express();


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/officedb" ,{useNewUrlParser: true , useUnifiedTopology: true});

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'shivdwi043@gmail.com',
        pass: ''
        
    }
});

console.log('created');


const officeSchema = new mongoose.Schema({

    username : String,
    phone : Number,
    department : String,
    email :String ,
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

app.get("/page5" , function(req,res){
    res.render("page5");
});


 app.post("/page2" , function(req ,res){
    const Employee = new employee({
        username : req.body.username,
        phone : req.body.phone,
        department : req.body.department,
        email : req.body.email,
        password : md5(req.body.password)
    });
    Employee.save(function(err){
        if(!err){
            res.render('page4');
        }
    }); 

   console.log(req.body.username);
   console.log(req.body.phone);
   console.log(req.body.department);
   console.log(req.body.email);
   console.log(req.body.password);

 });

 app.post('/page3' , function(req,res){
    const username = req.body.username;
    const password =  md5(req.body.password);

    employee.findOne({username : username} , function(err , foundEmployee){
        if(err){
            console.log(err);
        }
        else
        {
            if(foundEmployee){
                if(foundEmployee.password === password){
                    res.render('page4');
                }
            }
        }
    });
 });



 app.post('/page4' , (req,res) => {

    // console.log(req.body.a1);


    // transporter.sendMail({
    //     from: 'shivdwi043@gmail.com',
    //       to: 'shrdwi043@gmail.com',
    //       subject: 'puchu!',
    //       text: req.body.a1
    //     });

//     var mailOptions = {
//         from: 'shivdwi043@gmail.com',
//         to: 'shrdwi043@gmail.com',
//         subject: 'Mail',
//         text: 'Hiiii',


         var mailOptions = {
           from: 'shivdwi043@gmail.com',
           to: 'shrdwi043@gmail.com',
           subject: 'pickup order for waste',
           text: 'Hiii',
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
         res.redirect('/page5');
     
        
      
    //   transporter.sendMail(function(error, info){
    //     if (error) {
    //       console.log(error);
    //     } else {
    //       console.log('Email sent: ' + info.response);
    //     res.redirect('/page5');
    //      }
    //    });

    console.log(req.body.a1);
 });
app.listen(3000 , function () {
    console.log("App started on server 3000");
});

