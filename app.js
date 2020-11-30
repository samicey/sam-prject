const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config")

const app = express();
// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routes


app.listen(config.port, () => console.log(`Server started at ${config.port}`))