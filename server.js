/**
 * @file server.js
 * @description holds the routes and establishes connection to the client
 */

'use strict'

require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
