const Report = require('../../models/report');

module.exports = {
    notReadyHabits,
    addToNotReadyHabits,
    setHabitQtyInNotReadyHabits,
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