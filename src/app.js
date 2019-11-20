const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
mongoose.connect(process.env.MONGODB_URI,{
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});
const db = mongoose.connection;

db.on('connected',() => {
  console.log('Mongoose default connection is open');
});

db.on('error',err => {
  console.log(`Mongoose default connection has occured \n${err}`);
});

db.on('disconnected',() => {
  console.log('Mongoose default connection is disconnected');
});

process.on('SIGINT',() => {
  db.close(() => {
    console.log(
      'Mongoose default connection is disconnected due to application termination'
    );
    process.exit(0);
  });
});

// Load models
const Events = require('./models/events');

// Load routes
const eventsRoutes = require('./routes/event-routes');
app.use('/events',eventsRoutes);

const indexRoutes = require('./routes/index-routes');
app.use('/',indexRoutes);

module.exports = app;