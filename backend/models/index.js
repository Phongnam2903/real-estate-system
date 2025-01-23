const mongoose = require("mongoose");
const User = require("./User");
const db = {};

// Define schema

db.User = User;

module.exports = db;
