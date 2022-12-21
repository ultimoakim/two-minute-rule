const Report = require('../../models/report');

module.exports = {
    notReadyHabits,
    addToNotReadyHabits,
    setHabitQtyInNotReadyHabits,
    submitReport,
    getAllForUser,
};

// A 'notReadyHabit' is a habit that is not yet submitted into a report.
async function notReadyHabits(req, res) {
    const notReadyHabits = await Report.getNotReadyHabits(req.user._id);
    res.json(notReadyHabits);
};

async function addToNotReadyHabits(req, res) {
    const notReadyHabits = await Report.getNotReadyHabits(req.user._id);
    // The promise resolves to the document, which we already have
    // in the cart variable, so no need to create another variable...
    await notReadyHabits.addHabitToNotReadyHabits(req.params.id); 
    res.json(notReadyHabits);
};

async function setHabitQtyInNotReadyHabits(req, res) {
    const notReadyHabits = await Report.getNotReadyHabits(req.user._id);
    // The promise resolves to the document, which we already have
    // in the cart variable, so no need to create another variable...
    await notReadyHabits.setHabitQty(req.body.habitId, req.body.newQty); 
    res.json(notReadyHabits);
};

async function submitReport(req, res) {
    const notReadyHabits = await Report.getNotReadyHabits(req.user._id);
    notReadyHabits.isSubmitted = true;
    await notReadyHabits.save();
    res.json(notReadyHabits);
}

async function getAllForUser(req, res) {
    const reports = await Report.find({user: req.user._id, isSubmitted: true}).sort('-updatedAt');
    res.json(reports);
  }