const http = require('http');
const bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            console.log(err);
        }
        const collection = data.toString();
        console.log(collection.length);
        console.log(collection);
    }))

})