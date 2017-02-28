'use strict';

const http = require('http'),
    fs = require('fs'),
    util = require('util'),
    path = require('path'),
    contentType = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript'
    };
let cache = {};

var server = http.createServer((request, response) => {
    console.log('serving', request.url);

    const ext = path.extname(request.url);
    if (ext && contentType[ext]) {
        response.setHeader('Content-type', contentType[ext]);
    }
    response.setHeader('X-Powered-By', 'PCS');

    if (cache[request.url]) {
        console.log('Serving from cache');
        cache[request.url].accessed = new Date();
        response.end(cache[request.url].data);
    } else {
        console.log('Serving from disk');
        fs.readFile('content/' + request.url, 'utf-8', (err, data) => {
            if (err) {
                response.setHeader('Content-type', contentType['.html']);
                if (err.code === 'ENOENT') {
                    response.statusCode = 404;
                    response.write('No such page. Sorry.<br><h1>404</h1>');
                } else {
                    response.statusCode = 500;
                }
                response.end(err.message);
                return;
            }
            cache[request.url] = {
                fileName: 'content/' + request.url,
                accessed: new Date(),
                data: data,
                loaded: new Date()
            };
            response.end(data);
        });
    }
}).listen(80);
if (cache) {

    setInterval(() => {
        const cutOff = new Date() - 180000;

        Object.keys(cache).forEach(key => {
            if (cache[key].accessed < cutOff) {
                delete cache[key];
            } else {

                fs.stat(cache[key].fileName, function (err, stats) {
                    var mtime = stats.mtime;
                    console.log(cache[key].fileName, mtime);

                    if (cache[key].loaded < mtime) {
                        delete cache[key];
                    }
                });
            }
        });
    }, 20000);
}



