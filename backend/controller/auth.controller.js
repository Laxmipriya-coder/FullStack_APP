const fs = require("fs");
const crypto = require("crypto");
const { findAllData, insertData } = require("../utils/utils");

const userpath = "./db/users.json";

const register_controller = (req, res) => {
    try {
        const { username, age, email, password, gender } = req.body;

        // Validate input data
        if (!username || !age || !email || !password || !gender) {
            return res.status(400).json({
                message: "Insufficient data"
            });
        }

        // Get all users
        const allusers = findAllData(userpath);

        // Check if email already exists
        const isEmailExist = allusers.find(
            (user) => user.email === email
        );

        if (isEmailExist) {
            return res.status(409).json({
                message: "Email is already registered."
            });
        }

        // Create new user
        const newUser = {
            id: crypto.randomUUID(),
            username,
            age,
            email,
            password,
            gender,
        };

        // Insert new user
        const result = insertData(userpath, newUser);

        if (!result) {
            return res.status(500).json({
                message: "Failed to register"
            });
        }

        return res.status(201).json({
            message: "Registered successfully"
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

const login_controller = (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required"
            });
        }

        // Get all users
        const allusers = findAllData(userpath);

        // Find user by email
        const currentUser = allusers.find(
            (user) => user.email === email
        );

        if (!currentUser) {
            return res.status(404).json({
                message: "Email is not registered"
            });
        }

        // Check password
        if (currentUser.password !== password) {
            return res.status(401).json({
                message: "Password is incorrect"
            });
        }

        return res.status(200).json({
            message: "Login successfully",
            user: {
                id: currentUser.id,
                username: currentUser.username,
                email: currentUser.email
            }
        });

    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};



module.exports = { register_controller, login_controller };
