// Starter file — add your code here
const fs = require('fs');
console.log(fs);
const data = fs.readSync('assets/poem.txt');
console.log(data);