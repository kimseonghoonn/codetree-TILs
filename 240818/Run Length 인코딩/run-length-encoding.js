const fs = require("fs");
let a = fs.readFileSync(0).toString().trim()

let c = a[0]
let count = 1

let str=""
for (let i=1 ; i<a.length; i++) {
    let targetChar = a[i]
    if (targetChar == c) {
        count++
    }
    else {
        str += c
        str += count

        c=targetChar
        count=1
    }
}
str += c;
str += count;

console.log(str.length);
console.log(str);