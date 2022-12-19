const reportSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
})