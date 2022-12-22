const Schema = require('mongoose').Schema;

const habitSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    lvlOfImp: { type: Schema.Types.ObjectId, ref: 'LvlOfImp' },
    description: { type: String },
})

module.exports = habitSchema;