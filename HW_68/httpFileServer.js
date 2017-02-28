var http = require('http');
var fs = require('fs');
var server = http.createServer(function (req, res) {
    var rs = fs.createReadStream(process.argv[3]);
    rs.pipe(res);
});
server.listen(+process.argv[2]);

