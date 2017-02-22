const path = require('path');


const fs = require('fs');

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, (err, data) => {
        if (err) {
            callback(err);
            return;
        }
        callback(null, rightExtensions = data.filter(file => {
            return extension === path.extname(file).substring(1);
        }));
    }
    )
}


