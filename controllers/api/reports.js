const Report = require('../../models/report');

module.exports = {
    notReadyHabits,
};

// A 'notReadyHabit' is a habit that is not yet submitted into a report.
async function notReadyHabits(req, res) {
    const notReadyHabits = await Report.getNotReadyHabits(req.user._id);
    res.json(notReadyHabits);
}