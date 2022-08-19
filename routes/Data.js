/**
 * @file Data.js
 * @description route for User and Habit related requests
 */
'use strict';

const { default: axios } = require('axios');
// bringing in the user model so we can use mongoose methods on them
const userModel = require('../models/user');
// exporting user as a module
const Data = {};

const userId = '62ffc43c791cc0246ada876b'

/**

 * @param {object} req get request from the front end
 * @param {object} res a JSON object with User data (including habits)
 */
Data.getHabits = async (req, res) => {
	try {
		console.log(`request for habits...`);
		//* finding all of the documents in the database (in this case there is only one user)
		let allHabits = await userModel.find({});
		console.log(`GET request successful, returning ${allHabits}`);
		res.status(200).json(allHabits);
	} catch (err) {
		res.send(err);
	}
};

/**
 *
 * @param {object} req our habit object coming from the form submission on the client
 * @param {string} res sending a confirmation message to the client
 */
Data.addHabit = async (req, res) => {
	try {
		console.log(`new habit document: ${JSON.stringify(req.body)}`);
		console.log(`POST request for habits`);
		console.log(req.body);

		let user = await userModel.findById(req.body._id); //* finding the user docuemnt with their id
		let newHabit = req.body; //* this is the habit object we are going to push
		await user.habits.push(newHabit); //* pushing our new habit in to the document.habits array
		await user.save(() => {
			//* saving our document
			console.log('document saved');
		});

		res.status(200).send('Successfully added habit'); //* sending an OK to the client
	} catch (err) {
		console.error(err);
		res.send(console.error(err));
	}
};

Data.deleteHabit = async (req, res) => {
    try {
        console.log(`Request to DELETE a habit`);
        console.log(`habit we are deleting: ${JSON.stringify(req.body)}`);

        //TODO: Appriopriately delete a single habit, there is an issue with each ID not being unique.
        // let user = await userModel.findById(req.body._id);
        // console.log(`user: ${user}`)
        // await user.remove({ habits: req.body }, (err, result) => {
        //     if (err) {
        //         console.error(err);
        //     } else {
        //         console.log(`result: ${result}`);
        //     }
        // });
        
	} catch (err) {
		console.error(err);
		res.send(console.error(err));
	}
};

module.exports = Data;
