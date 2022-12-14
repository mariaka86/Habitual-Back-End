/**
 * @file server.js
 * @description holds the routes and establishes connection to the client
 */

'use strict';

// importing required packages
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

//importing the Data module so we can route requests to the methods in Data.js
const Data = require('./routes/Data');

//telling our app to use express
const app = express();

//this is our middleware so our data is parsed correctly.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//setting our env variables: mongo + port
const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection;

db.on('error', (err) =>{
	console.error(`DB ERROR: ${err}`)
})

db.once('open', () => {
	console.log(`Connected to the database`);
})

// route for grabbing all habits
app.get('/habits', Data.getHabits);
// route for adding a new habit
app.post('/habits/add', Data.addHabit);

app.delete('/habits/delete', Data.deleteHabit);

app.get('/', (req, res) => {
	res.status(200).json('success!');
});

// server confirming that it is listening on the specified port
app.listen(process.env.PORT || 3000, function(){
	console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });