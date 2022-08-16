/**
 * @file server.js
 * @description holds the routes and establishes connection to the client
 */

'use strict'

// importing required packages
require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

//telling our app to use express
const app = express();

//this is our middleware so our data is parsed correctly.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded)({extended: true});

//setting our env variables: mongo + port
const PORT = process.env.PORT
mongoose.connect(process.env.MONGO_URL);
const db = mongoose.connection