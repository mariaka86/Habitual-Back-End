const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const user = require('./models/user');

async function seed() {
	const myUser = new user({
		name: 'Zoe',
		dateCreated: '2022-08-16',
		habits: [
			{
				habit_name: 'Excercise',
				habit_frequency: 3,
				habit_goal: 'build',
				habit_schedule: {
					Monday: true,
					Tuesday: true,
					Wednesday: true,
					Thursday: true,
					Friday: true,
					Saturday: true,
					Sunday: true
				}
			},
			{
				habit_name: 'sleep more',
				habit_frequency: 5,
				habit_goal: 'build',
				habit_schedule: {
					Monday: true,
					Tuesday: false,
					Wednesday: false,
					Thursday: true,
					Friday: false,
					Saturday: false,
					Sunday: false
				}
			}
		]
	});
	await myUser.save();
	mongoose.disconnect();
}

seed();
