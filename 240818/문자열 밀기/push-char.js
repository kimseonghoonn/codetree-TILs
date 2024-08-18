const fs = require('fs');
let a = fs.readFileSync(0).toString().trim()

if (a[0] != a[-1]) {
    a = a.slice(-(a.length-1)) + a.slice(0,1)
}


console.log(a)