const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const User = require("../models/User");

async function register (req, res) {
    try {
        const data = req.body;

         // Generate a salt with a specific cost
        const salt = await bcrypt.genSalt(parseInt(process.env.BCRYPT_SALT_ROUNDS));

         // Hash the password
        data["password"] = await bcrypt.hash(data["password"], salt);
        
        const result = await User.create(data);

        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({"error": err.message})
    }
};


async function login(req, res) {
    const data = req.body;
    try {
        const user = await User.getByEmail(data.email);

        if (!user) {
            throw new Error("User not found.");
        }

        const authenticated = await bcrypt.compare(data.password, user.password);

        if (!authenticated) {
            throw new Error("Incorrect password.");
        } else {
            // jwt signing will go here
            const newToken = jwt.sign(
                {
                    "id": user.id,
                    "username": user.username
                },
                process.env.TOKEN_KEY,
                { expiresIn: "2h"}
            );
            res.status(200).json({
                "message": "Login successful",
                "token": newToken,
            });
        }
    } catch (err) {
        res.status(403).json({"error": err.message});
    }
}

module.exports = {register, login}