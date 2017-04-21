 const express = require('express'),  
    app = express();
app.use(require('./hwFileServer'));
app.use((req, res, next) => {
    res.write('<h1>Hello World</h1><br/>');
    next();
});
app.use((req, res, next) => {
    res.end('PCS is a great company<br/>');
});
app.listen(80); 