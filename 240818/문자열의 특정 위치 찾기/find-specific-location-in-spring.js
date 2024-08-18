const fs = require('fs')
let a= fs.readFileSync(0).toString().trim()

console.log(a.indexOf(a[a.length-1]))