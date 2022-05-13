const fs = require('fs');
class Logger {
    constructor(data) {
        this.data = data;
    }
    log(data, file) {
        if (file) {
            fs.appendFileSync(file, `${data}\n`);
        }
        else {
            this.data.console.log(`Logs: ${data}`);
        }
    }
    error(data) {
        this.data.console.error(`Logs: ${data}`);
    }
    warn(data) {
        this.data.console.warn(`Logs: ${data}`);
    }
    info(data) {
        this.data.console.info(`Logs: ${data}`);
    }
    debug(data) {
        this.data.console.debug(`Logs: ${data}`);
    }
    trace(data) {
        this.data.console.trace(`Logs: ${data}`);
    }
}

module.exports = Logger;