const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
});

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

const User = mongoose.model('User', userSchema);

module.exports = User;
