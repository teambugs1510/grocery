const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const routes = require('./Routes/Routes')
const Grocery = require('./Model/schema')
const path = require("path");



const static_path = path.join(__dirname, "public");
app.use(express.static(static_path));
app.use(express.urlencoded({ extended: true }));
  

mongoose.connect('mongodb+srv://sarfaraz:0987654321@cluster0.goyvn6p.mongodb.net/todolist?retryWrites=true&w=majority',{
 useNewUrlParser:true,
   
})
mongoose.connection.once('open', ()=>{
    console.log('conected to data base')
})






app.use(cors())
 app.use(routes)
 app.use(bodyParser.json())
 app.use(express.static('../Demo/',{index:'index.html'}))



var port = 2001;



app.listen(port,function(err){
    if(err)console.log("fk")
   
});

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://sarfaraz:0987654321@cluster0.goyvn6p.mongodb.net/todolist?retryWrites=true&w=majority";






 