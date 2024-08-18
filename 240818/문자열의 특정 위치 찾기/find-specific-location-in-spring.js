const fs = require('fs')
let a= fs.readFileSync(0).toString().trim()

if (a.indexOf(a[a.length-1]) == -1) console.log("No")

else console.log(a.indexOf(a[a.length-1]))