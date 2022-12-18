const mongoose = require('mongoose');

require('./lvlofimp');
const habitSchema = require('./habitSchema');

module.exports = mongoose.model('Habit', habitSchema);