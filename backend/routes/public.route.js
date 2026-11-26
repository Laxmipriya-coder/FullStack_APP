
const express = require("express");

const {
    register_controller,
    login_controller
} = require("../controller/auth.controller");

const publicRoute = express.Router();

// Register route
publicRoute.post("/register", register_controller);

// Login route
publicRoute.post("/login", login_controller);

module.exports = { publicRoute };
