const fs = require('fs')
let a = fs.readFileSync(0).toString().trim().split("")
let str=""
for (let i=0; i<a.length; i++) {
    if (i==1 || i==a.length-2) {
        continue
    }
    str +=a[i]
}

console.log(str)