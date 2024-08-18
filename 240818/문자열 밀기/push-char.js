const fs = require('fs');
let a = fs.readFileSync(0).toString().trim()

if (a.length==1) {
    console.log(a)
}
else {
    a = a.slice(-(a.length-1)) + a.slice(0,1)
    console.log(a)
}