const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }, 
}, {
    timestamps: true,
    toJSON: {
        transform: function(doc, ret) {
            delete ret.password;
            return ret;
        }
    }
});

userSchema.pre('save', async function(next) {
    // 'this' keyword is the user document! So we can't use arrow functions here because they don't allow the code to overwrite!
    if (!this.isModified('password')) return next();
    // Replace the password with the computed hash instead.
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
})

module.exports = mongoose.model('User', userSchema);