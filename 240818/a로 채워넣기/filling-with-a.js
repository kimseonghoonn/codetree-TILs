const fs = require('fs')
let a= fs.readFileSync(0).toString().trim().split("")

let str=""
a[1]='a'
a[a.length-2]='a'

for (let i=0; i<a.length; i++) {
    str += a[i]
}

console.log(str)