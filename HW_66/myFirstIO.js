'use strict';

if (process.argv.length < 3) {
    console.error('You must pass a file name to read');
} else {
    const fileName = process.argv[2];

    const fs = require('fs'),
        readFileSync = fs.readFileSync(fileName, 'utf-8');

    
        console.log( readFileSync.toString().split('\n').length-1);


    
    }
