const winston = require("winston")
const express = require("express");
const app = express();

require("./startup/routes")(app);
require("./startup/db")();
require("./startup/logging")();
require("./startup/config")(app);
require("./startup/validation")();
//require("./startup/prod")(app);

const port = process.env.PORT || 7010;
const server = app.listen(port, () => winston.info(`Listening on port ${port} ...`));

module.exports = server;
