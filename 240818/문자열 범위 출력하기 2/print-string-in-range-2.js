const fs = require("fs");
let givenStr = fs.readFileSync(0).toString().trim().split("\n");
let a = givenStr[0].split("")
let b = Number(givenStr[1])
let str = ""

if (a.length>b) {
    for (let i = (a.length-1); i>=((a.length)-b); i--) {
        str += a[i]
    }
}
else if (a.length<b) {
    for (let i= 0; i<a.length-1; i++) {
        str += a[i]
    }
}

console.log(str);