const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config")
const appRoutes = require("./app/routes/routes");

const app = express();
// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routes
app.use("/api", appRoutes);

app.listen(config.port, () => console.log(`Server started at ${config.port}`));

module.exports = app;