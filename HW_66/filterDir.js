const path = require('path');
const givenPath = process.argv[2];
const extension = process.argv[3];
const fs = require('fs');

fs.readdir(givenPath,(err, lists)=> { 
 if(err){
     console.log(err);
     return;
 }   
const rightExtensions = lists.filter(list => { 
 return extension===path.extname(list).substring(1);

});
rightExtensions.forEach(rightExtension=> {
console.log(rightExtension);
});
     
 
});
