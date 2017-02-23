 const http = require('http');
const bl = require('bl');

function juggle (i){http.get(process.argv[i], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            console.log(err);
        }
        const collection = data.toString();
        console.log(collection);
    }))

})
}
 for(i =2;i<5;i++){
     juggle(i);
 }  