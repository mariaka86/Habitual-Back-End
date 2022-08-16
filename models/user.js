/**
 * @file user.js
 * @description the schema for the user and habit (nested)
 */

// importing required packages
import mongoose from 'mongoose';
const { Schema } = mongoose;

// Defining the schema for a user
const userSchema = new Schema({ // potential to change if we link auth0 and/or pixela API
    name: String,
    dateCreated: String, 
    habits: [{          // a one-to-many relationship using embedded documents with their own schema
        habit_name: String,
        habit_frequency: Number,
        habit_goal: String,
        habit_schedule: {       //TODO: this will most likely need to be changed to align with the client 
            Monday: Boolean,
            Tuesday: Boolean,
            Wednesday: Boolean,
            Thursday: Boolean,
            Friday: Boolean,
            Saturday: Boolean,
            Sunday: Boolean,
        }
    }]
});

// creating the User model 
const User = mongoose.model('User', userSchema);

// exporting the schema
module.exports = User;