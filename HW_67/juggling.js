const http = require('http');
const bl = require('bl');
const collectionArray = [];
let index;
function juggle(i, index) {
    http.get(process.argv[i], function (response) {
        response.pipe(bl(function (err, data) {
            if (err) {
                console.log(err);
            }
            collectionArray[index] = data.toString();
            if (index === 2) {
                collectionArray.forEach(function (collection) {
                    console.log(collection);
                });
            }
        }));
    });
}
for (i = 2; i < 5; i++) {
    juggle(i, i - 2);
}  