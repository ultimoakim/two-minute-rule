const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const habitSchema = require('./habitSchema');

const lineHabitSchema = new Schema({
    qty: {type: Number, default: 1},
    habit: habitSchema,
}, {
    timestamps: true,
    toJSON: {virtuals: true}
})

const reportSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    lineHabits: [lineHabitSchema],
    isSubmitted: {type: Boolean, default: false}
}, {
    timestamps: true,
    toJSON: {virtuals: true}
});

lineHabitSchema.virtual('habitDesc').get(function() {
    return this.habit.name;
})

reportSchema.virtual('reportId').get(function() {
    return this.id.slice(-6).toUpperCase();
});

reportSchema.statics.getNotReadyHabits = function(userId) {
    return this.findOneAndUpdate(
        {user: userId, isSubmitted: false},
        {user: userId},
        {upsert: true, new: true},
    );
};

module.exports = mongoose.model('Report', reportSchema);