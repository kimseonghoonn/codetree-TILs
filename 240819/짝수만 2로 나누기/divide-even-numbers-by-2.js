const fs = require('fs');
let input= fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0])
let a = input[1].split(" ").map(Number)

let str=" "
let mod = 0
for (let i=0; i<n; i++) {
    mod = modify(a[i])
    str += mod + " "
}

console.log(str)

function modify(a) {
    if (a%2==0 && a!=1) a=a/2

    return a
}