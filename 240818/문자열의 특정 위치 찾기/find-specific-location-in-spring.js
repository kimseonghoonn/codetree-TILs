const fs = require('fs')
let a= fs.readFileSync(0).toString().trim().split(" ")
let b = a[0]
let c = a[1]
if (b.indexOf(c) == -1) console.log("No")

else console.log(b.indexOf(c))