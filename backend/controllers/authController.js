const jwt = require("jsonwebtoken");
const User = require("../model/user");
const bcrypt = require("bcrypt");

exports.registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const hashPasswords = await bcrypt.hash(password, 10);
        const user = await new User({ name, email, password: hashPasswords });
        const userSave = await user.save();

        res.status(201).json(userSave);
        res.send("Registration Successful.");

    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
}

exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: "user not registered" });
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(401).json({ message: "email or password is incorrect" });
        };

        const token = jwt.sign({ email: user.email }, "hello", {
            expiresIn: "30m"
        });

        return res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token
        });
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
};