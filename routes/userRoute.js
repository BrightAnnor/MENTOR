const express = require('express');
const{home,about,pricing,contact,courses,trainers,events} = require('../controllers/userController');


// server extension
const app = express.Router();

// Routes
app.get('/',home)
app.get('/about',about)
app.get('/pricing',pricing)
app.get('/contact',contact)
app.get('/trainers',trainers)
app.get('/courses',courses)
app.get('/events',events)


module.exports = app