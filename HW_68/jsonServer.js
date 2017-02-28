'use strict';

const http = require('http');
var url = require('url');
var result;
var time;
var server = http.createServer((request, response) => {
    response.setHeader('Content-type', 'application/json');
    var parsedUrl = url.parse(request.url, true);
    var time = new Date(parsedUrl.query.iso);
    result = {};
    if (parsedUrl.pathname === '/api/parsetime') {
        result.hour = time.getHours();
        result.minute = time.getMinutes();
        result.second = time.getSeconds();
    }
    if (parsedUrl.pathname === '/api/unixtime') {

        result.unixtime = time.getTime();
    }
    response.end(JSON.stringify(result));
}).listen(+process.argv[2]);













