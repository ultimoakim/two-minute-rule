const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const habitSchema = require('./habitSchema');

const lineHabitSchema = new Schema({
    qty: { type: Number, default: 1 },
    habit: habitSchema,
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

const reportSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    lineHabits: [lineHabitSchema],
    isSubmitted: { type: Boolean, default: false }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
});

lineHabitSchema.virtual('habitDesc').get(function () {
    return this.habit.name;
})

reportSchema.virtual('reportId').get(function () {
    return this.id.slice(-6).toUpperCase();
});

reportSchema.statics.getNotReadyHabits = function (userId) {
    return this.findOneAndUpdate(
        { user: userId, isSubmitted: false },
        { user: userId },
        { upsert: true, new: true },
    );
};

// Instance method for adding an item to a cart (unpaid order)
reportSchema.methods.addHabitToNotReadyHabits = async function (habitId) {
    // 'this' keyword is bound to notReadyHabits (order doc)
    const notReadyHabits = this;
    // Check if the item already exists inside of notReadyHabits
    const lineHabit = notReadyHabits.lineHabits.find(lineHabit => lineHabit.habit._id.equals(habitId));
    if (lineHabit) {
        // It already exists, so increase the qty
        lineHabit.qty += 1;
    } else {
        // Get the habit from the "lvlofimp"
        // Note how the mongoose.model method behaves as a getter when passed one arg vs. two
        const Habit = mongoose.model('Habit');
        const habit = await Habit.findById(habitId);
        // The qty of the new lineHabit object being pushed in defaults to 1
        notReadyHabits.lineHabits.push({ habit });
    }
    // return the save() method's promise
    return notReadyHabits.save();
};

// Instance method to set a habit's qty in the notReadyHabits (will add habit if does not exist)
reportSchema.methods.setHabitQty = async function (habitId, newQty) {
    // 'this' keyword is bound to notReadyHabits (order doc)
    const notReadyHabits = this;
    // Find the line habit in the notReadyHabits for the unfinished list
    const lineHabit = notReadyHabits.lineHabits.find(lineHabit => lineHabit.habit._id.equals(habitId));
    if (lineHabit && newQty <= 0) {
        // Calling remove, removes itself from the notReadyHabits.lineHabits array
        lineHabit.remove();
    } else if (lineHabit) {
        // Set the new qty - positive value is assured thanks to previous "if" statement
        lineHabit.qty = newQty;
    }
    // return the save() method's promise
    return notReadyHabits.save();
};



module.exports = mongoose.model('Report', reportSchema);