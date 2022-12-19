const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lvlOfImpSchema = new Schema({
    level: { type: Number, required: true, min: 1, max: 3 },
    sortOrder: Number,
}, {
    timestamps: true
});

module.exports = mongoose.model('LvlOfImp', lvlOfImpSchema);