const events = require('events'),

    eventEmitter = new events.EventEmitter();

eventEmitter.on('second', () => {
    var d = new Date();
    var n = d.toLocaleTimeString();
    console.log(n);
});
function time() {
    eventEmitter.emit('second');
}
setInterval(time, 1000);
