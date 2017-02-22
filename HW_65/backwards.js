const fs = require('fs');
function reverse(s) {
    var backwardsFile = '';
    for (var i = s.length - 1; i >= 0; i--) {
        backwardsFile += s[i];
    }
    return backwardsFile;
}
fs.readFile('backwards.js', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log('file contents backwards:\n', reverse(data.toString()));
    }
});
console.log('Done');