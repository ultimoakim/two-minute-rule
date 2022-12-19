// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Habit = require('./models/habit');
const LvlOfImp = require('./models/lvlofimp');
const Report = require('./models/report');

// Local variables will come in handy for holding retrieved documents
let user, habit, lvlOfImp, report;
let users, habits, lvlOfImps, reports;


