const dotenv = require("dotenv");
dotenv.config()

const config =  {
    server: process.env.SERVER,
    port: process.env.PORT
};

Object.freeze(config)

module.exports = config;