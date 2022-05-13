const fs = require('fs');
class Logger {
    constructor(data) {
        this.data = data;
        this.data.console = console;
    }
    log(data) {
        this.data.console.log(`Logger ${data}`);
    }
    error(data) {
        this.data.console.error(`Logger ${data}`);
    }
    info(data) {
        this.data.console.info(`Logger ${data}`);
    }
    warn(data) {
        this.data.console.warn(`Logger ${data}`);
    }
    debug(data) {
        this.data.console.debug(`Logger ${data}`);
    }
    trace(data) {
        this.data.console.trace(`Logger ${data}`);
    }
    dir(data) {
        this.data.console.dir(data);
    }
    time(data) {
        this.data.console.time(data);
    }
    timeEnd(data) {
        this.data.console.timeEnd(data);
    }
}

module.exports = Logger;