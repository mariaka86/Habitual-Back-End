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
Data.getHabits = async (req, res) => {
    try {
        // let habitQuery = req.query.params
        console.log(`request for habits...`);

        let allHabits = await userModel.find({});
        console.log(`GET request successful, returning ${allHabits}`)
        res.status(200).json(allHabits);


    } catch (err) {
        res.send(err);
    }
}

module.exports = Data;