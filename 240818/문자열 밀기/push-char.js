const fs = require('fs');
let a = fs.readFileSync(0).toString().trim()

a = a.slice(-(a.length-1)) + a.slice(0,1)

console.log(a)