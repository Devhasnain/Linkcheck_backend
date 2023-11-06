const { config } = require("dotenv");

config();

const configurations = {
    MONGODB_URI: process.env.MONGODB_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    url:'http://localhost:3002'
};

module.exports = configurations;