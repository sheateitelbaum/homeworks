const fs = require('fs');

module.exports = function (req, res, next) {
    fs.readFile('content/' + req.url, 'utf-8', (err, data) => {
        if (err) {
            next();
        }
        res.end(data);
    });
};



