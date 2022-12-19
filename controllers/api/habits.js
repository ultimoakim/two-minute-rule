const Habit = require('../../models/habit');

module.exports = {
    index,
    show,
};

async function index(req, res) {
    const habits = await Habit.find({}).sort('name').populate('lvlOfImp').exec();
    habits.sort((a, b) => a.lvlOfImp.sortOrder - b.lvlOfImp.sortOrder);
    res.json(habits);
}

async function show(req, res) {
    const habit = await Habit.findById(req.params.id);
    res.json(habit);
}