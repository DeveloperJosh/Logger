const Logger = require('../logger.js');
const logger = new Logger(global);

logger.log("works", './test.txt');