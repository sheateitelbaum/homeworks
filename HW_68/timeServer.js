var net = require('net');
const d = new Date(),
    y = d.getFullYear(),
    mon = addZero(d.getMonth() + 1),
    day = addZero(d.getDate()),
    h = addZero(d.getHours()),
    min = addZero(d.getMinutes());
var server = net.createServer(function (socket) {
    socket.write(y + '-' + mon + '-' + day + ' ' + h + ':' + min);
    socket.end('\n');
}).listen(+process.argv[2]);
function addZero(time) {
    return (time < 10) ? '0' + time : time;
}