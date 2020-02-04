//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const nodemailer = require("nodemailer");
const app = express();

app.use(express.static("public"));
app.set('view engine' , 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://admin-shivansh:shiv**2406@cluster0-zpipx.mongodb.net/officedb" ,{useNewUrlParser: true , useUnifiedTopology: true});

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'shivdwi043@gmail.com',
//       pass: 'drishtis.agarwal@gmail.com'
//     }
//   });

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

app.get("/page5" , function(req,res){
    res.render("page5");
});


// app.post("/page2" , function(req ,res){
//     const newEmployee = new Employee({
//         name : req.body.name,
//         phone : req.body.phone,
//         department : req.body.department,
//         email : req.body.email,
//         password : req.body.password
//     });
//     newEmployee.save(function(err){
//         if(!err){
//             res.render("page3");
//         }
//     }); 
// });

// app.post('/page4' , function(req,res){

    // var mailOptions = {
    //     from: 'drishtis.agarwal@gmail.com ',
    //     to: 'shivdwi043@gmail.com',
    //     subject: 'Mail',
    //     text: req.body.a1
    //   };
      
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           console.log('Email sent: ' + info.response);
//         }
//       });

//       res.redirect('/page5');
// });

app.listen(3000 , function () {
    console.log("App started on server 3000");
});

