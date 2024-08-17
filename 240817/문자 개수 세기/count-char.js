const fs = require("fs")

let input = fs.readFileSync(0).toString().trim().split("\n")

let str = input[0];
let a = input[1];

let len = str.length
let count = 0

for (let i = 0; i<len; i++) {
    if (str[i] == a) count++
}

console.log(count)