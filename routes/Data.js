/**
 * @file Data.js
 * @description route for User and Habit related requests
 */
'use strict';

// bringing in the user model so we can use mongoose methods on them
const userModel = require('../models/user');
// exporting user as a module
const Data = {};


/**

 * @param {object} req get request from the front end
 * @param {object} res a JSON object with User data (including habits)
 */
Data.getUser = async (req, res) => {
    try {
        const userToken = {};
        if (req.query.userToken) {
        }
    } catch (err) {
        res.send(err);
    }
}

