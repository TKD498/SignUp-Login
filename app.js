const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
//Database Connection
mongoose.connect(process.env.DATABASE, { useNewUrlParser : true}, (err)=>{
    if(err) throw err;
});

//Views
app.use('/', express.static('views'));
app.use(bodyParser.urlencoded({ extended : false}));
app.use(bodyParser.json());

//Routes
const singupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');

//Route Views
app.use('/registered', singupRoute);
app.use('/logedin',  loginRoute);


app.listen(process.env.PORT)