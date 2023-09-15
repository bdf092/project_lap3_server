const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    refreshToken: String,
    quizzesPlayed: {
        type: Number,
        default: 0
    }
});

/*
userSchema.statics.getById = async function(id) {
    const user = await this.findById(id);
    if (!user) {
        throw new Error("Unable to locate user.");
    }
    return user;
};

userSchema.statics.getByUsername = async function(username) {
    const user = await this.findOne({ username });
    if (!user) {
        throw new Error("Unable to locate user.");
    }
    return user;
};

userSchema.statics.getByEmail = async function(email) {
    const user = await this.findOne({ email });
    if (!user) {
        throw new Error("Unable to locate user.");
    }
    return user;
};

userSchema.statics.createUser = async function(data) {
    const { username, email, password } = data;
    const newUser = new this({ username, email, password });
    await newUser.save();
    return newUser;
};
*/

module.exports = mongoose.model('User', userSchema);
