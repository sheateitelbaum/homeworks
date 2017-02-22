var filterModule = require('./filterModule.js')

filterModule(process.argv[2], process.argv[3], function (err, files) {
  if (err) {
    console.log(err);
    return;
  }
  files.forEach(function (file) {
    console.log(file);
  });
});


