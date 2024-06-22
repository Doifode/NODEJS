const EventEmitter = require('node:events');

const eventEmitter = new EventEmitter();
eventEmitter.on("start", (fName, sName) => {
    console.log("start event triggered !", fName, sName)
})
eventEmitter.emit('start', 'yash doifode', "om doifode");
