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
        console.log(`GET request successful, returning ${allHabits}`);
        res.status(200).json(allHabits);


    } catch (err) {
        res.send(err);
    }
}

Data.addHabit = async (req, res) => {
    try {
        let newHabit = req.body;
        console.log(`new habit document: ${JSON.stringify(req.body)}`);
        console.log(`POST request for habits`);

        console.log(req.body._id);
        await userModel.findById(req.params._id, res.habits.push(newHabit))
        .then((res) => {
            console.log(`user found!`);
            

        }).catch((err) => {
            console.error(err);
            res.send(console.error(err));
        });

        

    } catch (err) {
        console.error(err);
        res.send(console.error(err));
    }
};

module.exports = Data;