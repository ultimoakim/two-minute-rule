const Schema = require('mongoose').Schema;

const habitSchema = new Schema({
    name: { type: String, required: true },
    lvlOfImp: { type: Schema.Types.ObjectId, ref: 'LvlOfImp' },
    description: { type: String },
})

module.exports = habitSchema;